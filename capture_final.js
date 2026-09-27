const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const tasks = [
  { file: 'homepage_1440_desktop.png', url: 'http://localhost:3000/', w: 1440, h: 900, mobile: false },
  { file: 'homepage_1280_desktop.png', url: 'http://localhost:3000/', w: 1280, h: 800, mobile: false },
  { file: 'homepage_768_tablet.png',   url: 'http://localhost:3000/', w: 768,  h: 1024, mobile: false },
  { file: 'homepage_390_mobile.png',   url: 'http://localhost:3000/', w: 390,  h: 844, mobile: true },
  { file: 'homepage_375_mobile.png',   url: 'http://localhost:3000/', w: 375,  h: 667, mobile: true },
  { file: 'detail_project_117_desktop.png', url: 'http://localhost:3000/projects/project-117/', w: 1440, h: 900, mobile: false },
  { file: 'detail_sentinel_grid_desktop.png', url: 'http://localhost:3000/projects/sentinel-grid/', w: 1440, h: 900, mobile: false },
  { file: 'detail_eco_guardian_desktop.png', url: 'http://localhost:3000/projects/eco-guardian/', w: 1440, h: 900, mobile: false },
  { file: 'detail_apartment_os_desktop.png', url: 'http://localhost:3000/projects/apartment-management-os/', w: 1440, h: 900, mobile: false },
  { file: 'detail_apartment_os_mobile.png', url: 'http://localhost:3000/projects/apartment-management-os/', w: 390, h: 844, mobile: true },
];

async function run() {
  const localDir = path.join('D:\\\\ProtfolioWeb', 'final_screenshots');
  const artifactDir = 'C:\\\\Users\\\\het81\\\\.gemini\\\\antigravity\\\\brain\\\\0fb57b7a-2544-465c-a4ca-a7632dc7fb6e\\\\final_screenshots';
  
  if (!fs.existsSync(localDir)) fs.mkdirSync(localDir, { recursive: true });
  if (!fs.existsSync(artifactDir)) fs.mkdirSync(artifactDir, { recursive: true });

  const chromePath = 'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe';
  const port = 9227;
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=' + port,
    '--disable-gpu',
    '--no-sandbox',
  ]);

  await sleep(2500);

  try {
    const targetRes = await fetch('http://localhost:' + port + '/json/new', { method: 'PUT' });
    const target = await targetRes.json();
    const ws = new WebSocket(target.webSocketDebuggerUrl);

    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

    let id = 0;
    const pending = new Map();
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        pending.get(msg.id)(msg.result);
        pending.delete(msg.id);
      }
    };

    function send(method, params = {}) {
      return new Promise((resolve) => {
        id++;
        pending.set(id, resolve);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    for (const t of tasks) {
      console.log('Capturing:', t.file);
      await send('Emulation.setDeviceMetricsOverride', {
        width: t.w,
        height: t.h,
        deviceScaleFactor: 1,
        mobile: t.mobile,
      });

      await send('Page.navigate', { url: t.url });
      await sleep(1500);

      const shot = await send('Page.captureScreenshot', { format: 'png' });
      const buf = Buffer.from(shot.data, 'base64');
      fs.writeFileSync(path.join(localDir, t.file), buf);
      fs.writeFileSync(path.join(artifactDir, t.file), buf);
      console.log('Saved:', t.file, buf.length, 'bytes');
    }

    ws.close();
    proc.kill();
    console.log('All screenshots captured successfully!');
  } catch (err) {
    proc.kill();
    console.error('Error during capture:', err);
  }
}
run();
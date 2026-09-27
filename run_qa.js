const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: 'desktop_1440', width: 1440, height: 900, mobile: false },
  { name: 'desktop_1280', width: 1280, height: 800, mobile: false },
  { name: 'tablet_768', width: 768, height: 1024, mobile: false },
  { name: 'mobile_390', width: 390, height: 844, mobile: true },
  { name: 'mobile_375', width: 375, height: 667, mobile: true },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const outDir = path.join(process.cwd(), 'qa_screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  
  const chromePath = 'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe';
  const port = 9226;
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

    const logs = [];

    for (const vp of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.mobile,
      });

      await send('Page.navigate', { url: 'http://localhost:3000/' });
      await sleep(1500);

      const ovRes = await send('Runtime.evaluate', {
        expression: 'JSON.stringify({ scrollWidth: document.documentElement.scrollWidth, innerWidth: window.innerWidth, overflow: document.documentElement.scrollWidth > window.innerWidth })',
      });
      const ov = JSON.parse(ovRes.result.value);
      const logLine = 'Viewport ' + vp.name + ' (' + vp.width + 'x' + vp.height + '): overflow=' + ov.overflow + ' (scrollWidth=' + ov.scrollWidth + ', innerWidth=' + ov.innerWidth + ')';
      logs.push(logLine);
      console.log(logLine);

      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(outDir, vp.name + '_hero.png'), Buffer.from(shot.data, 'base64'));

      if (vp.name === 'mobile_390') {
        await send('Runtime.evaluate', {
          expression: 'document.querySelector(\"button[aria-label=\\\"Open menu\\\"]\")?.click()',
        });
        await sleep(500);
        const shotMenu = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.join(outDir, 'mobile_menu_open.png'), Buffer.from(shotMenu.data, 'base64'));
      }
    }

    // Desktop 1440 Sections
    await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
    await send('Page.navigate', { url: 'http://localhost:3000/' });
    await sleep(1500);

    // Scroll to projects
    await send('Runtime.evaluate', { expression: 'document.getElementById(\"projects\").scrollIntoView()' });
    await sleep(1000);
    const shotProj = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'desktop_1440_projects.png'), Buffer.from(shotProj.data, 'base64'));

    // Scroll to skills
    await send('Runtime.evaluate', { expression: 'document.getElementById(\"skills\").scrollIntoView()' });
    await sleep(1000);
    const shotSkills = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'desktop_1440_skills.png'), Buffer.from(shotSkills.data, 'base64'));

    // Scroll to contact
    await send('Runtime.evaluate', { expression: 'document.getElementById(\"contact\").scrollIntoView()' });
    await sleep(1000);
    const shotContact = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'desktop_1440_contact.png'), Buffer.from(shotContact.data, 'base64'));

    // Detail Page: Flagship project-117
    await send('Page.navigate', { url: 'http://localhost:3000/projects/project-117/' });
    await sleep(1500);
    const shotP117 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'detail_flagship_project_117.png'), Buffer.from(shotP117.data, 'base64'));

    // Detail Page: Supporting apartment-management-os
    await send('Page.navigate', { url: 'http://localhost:3000/projects/apartment-management-os/' });
    await sleep(1500);
    const shotApt = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'detail_supporting_apartment_os.png'), Buffer.from(shotApt.data, 'base64'));

    // Detail Page: Supporting phishing-site-detection
    await send('Page.navigate', { url: 'http://localhost:3000/projects/phishing-site-detection/' });
    await sleep(1500);
    const shotPhish = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'detail_supporting_phishing.png'), Buffer.from(shotPhish.data, 'base64'));

    // Mobile 390 Projects section
    await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    await send('Page.navigate', { url: 'http://localhost:3000/' });
    await sleep(1500);
    await send('Runtime.evaluate', { expression: 'document.getElementById(\"projects\").scrollIntoView()' });
    await sleep(1000);
    const shotMobProj = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'mobile_390_projects.png'), Buffer.from(shotMobProj.data, 'base64'));

    ws.close();
    proc.kill();
    fs.writeFileSync(path.join(process.cwd(), 'qa_report.txt'), logs.join('\\n'), 'utf8');
    console.log('QA Suite Completed Successfully!');
  } catch (err) {
    proc.kill();
    console.error('QA Error:', err);
  }
}
main();
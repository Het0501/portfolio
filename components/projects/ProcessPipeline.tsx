import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

type ProcessPipelineProps = {
  steps: string[];
  title?: string;
};

export function ProcessPipeline({ steps, title = 'System Architecture & Execution Pipeline' }: ProcessPipelineProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className='my-8 p-6 md:p-8 rounded-xl border border-zinc-800 bg-zinc-950/70 shadow-sm'>
      <div className='flex flex-wrap items-center justify-between gap-2 mb-6'>
        <div className='flex items-center gap-2'>
          <span className='w-2 h-2 rounded-full bg-cyan-400 animate-pulse' aria-hidden='true' />
          <h3 className='text-xs font-mono font-semibold text-cyan-400 uppercase tracking-[0.2em]'>
            {title}
          </h3>
        </div>
        <span className='text-[11px] font-mono text-zinc-500'>
          {steps.length} Sequenced Stages
        </span>
      </div>

      {/* Pipeline flow grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
        {steps.map((step, idx) => (
          <div
            key={step}
            className='relative flex flex-col justify-between p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all group'
          >
            <div className='flex items-center justify-between mb-3'>
              <span className='text-[10px] font-mono font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors'>
                STAGE 0{idx + 1}
              </span>
              {idx < steps.length - 1 ? (
                <ArrowRight size={13} className='text-zinc-600 group-hover:text-cyan-400/80 transition-colors' />
              ) : (
                <CheckCircle2 size={13} className='text-emerald-400' />
              )}
            </div>
            <p className='text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors leading-snug'>
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

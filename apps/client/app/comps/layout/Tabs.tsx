'use client';
import { cn } from '@/lib';
import { TextP } from '@/comps';

export function Tabs(props: {
  className?: string;
  data: { title: string; isActive: boolean; onClick: VoidFunction; className?: string }[];
}) {
  return (
    <div className={cn('w-full', props.className)}>
      <div className="flex items-center justify-between">
        {props.data.map((val, i) => (
          <div
            key={i}
            className={cn(
              'flex items-center justify-center bg-secondary w-full px-3 py-2',
              val.isActive && 'border-primary border-b'
            )}
            onClick={val.onClick}
          >
            <TextP>{val.title}</TextP>
          </div>
        ))}
      </div>
    </div>
  );
}

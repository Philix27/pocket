<<<<<<< HEAD:apps/client/app/comps/Row.tsx
=======
'use client';
>>>>>>> main:client/app/comps/Row.tsx
import { cn } from '@/lib';
import { IconType } from 'react-icons';
import { LuChevronRight } from 'react-icons/lu';
import { TextH, TextP } from './custom';

export type IRow = {
  title: string;
  subtitle: string;
  Icon: IconType;
  color?: string;
  onClick?: VoidFunction;
<<<<<<< HEAD:apps/client/app/comps/Row.tsx
=======
  hideArrow?: boolean;
  isLast?: boolean;
>>>>>>> main:client/app/comps/Row.tsx
};
export function Row(props: IRow) {
  const { Icon } = props;
  return (
<<<<<<< HEAD:apps/client/app/comps/Row.tsx
    <div className="flex justify-between items-center py-2 border-b border-accent" onClick={() => props.onClick}>
      <div className="flex items-center justify-center">
        <Icon size={20} className={cn('text-primary mr-3')} />
        <div>
          <TextH v="h5" className={'text-card-foreground tracking-wide mb-1'}>
=======
    <div
      className={cn('flex justify-between items-center py-2', props.isLast || 'border-b border-accent', props.color)}
      onClick={props.onClick}
    >
      <div className="flex items-center justify-center">
        <Icon size={20} className={cn('text-primary mr-3')} />
        <div>
          <TextH v="h5" className={'text-card-foreground mb-1'}>
>>>>>>> main:client/app/comps/Row.tsx
            {props.title}
          </TextH>
          <TextP className="text-muted">{props.subtitle}</TextP>
        </div>
      </div>
<<<<<<< HEAD:apps/client/app/comps/Row.tsx
      <LuChevronRight size={20} onClick={props.onClick} />
=======
      {!props.hideArrow && <LuChevronRight size={20} />}
    </div>
  );
}

export function SimpleRow(props: { left: string; right: string; color?: string; isLast?: boolean }) {
  return (
    <div className={cn('flex justify-between items-center py-2', props.isLast || 'border-b border-accent')}>
      <TextP className={'text-muted'}>{props.left} </TextP>
      <TextP className="font-semibold">{props.right}</TextP>
>>>>>>> main:client/app/comps/Row.tsx
    </div>
  );
}

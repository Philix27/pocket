import { cn } from '@/lib';

export function AppRadio(props: { onClick?: VoidFunction; isSelected?: boolean }) {
  return (
    <div
      className={cn(
        'size-[15px] rounded-[10px] flex items-center justify-center mx-2',
        props.isSelected ? 'bg-primary-foreground' : 'bg-secondary-foreground'
      )}
    >
      <div className={cn('size-[10px] rounded-[5px]', props.isSelected ? 'bg-primary' : 'bg-secondary')}></div>
    </div>
  );
}

import { cn } from '@/lib';
import { GrRadial, GrRadialSelected } from 'react-icons/gr';

export const Radial = (props: { isChecked: boolean; className?: string }) =>
  props.isChecked ? (
    <GrRadialSelected className={cn('text-primary', props.className)} />
  ) : (
    <GrRadial className={cn(props.className)} />
  );

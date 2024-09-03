import { TextP } from '@/comps/custom';
import { IconType } from 'react-icons';

export function DrawerRow(props: { title: string; icon?: IconType; onClick?: VoidFunction }) {
  const Icon = props.icon!;
  return (
    <div className="w-full flex items-center py-2 border-b-[0.3px]" onClick={props.onClick}>
      {props.icon && <Icon className="mr-4" size={20} />}
      <TextP className={'font-bold'}>{props.title}</TextP>
    </div>
  );
}

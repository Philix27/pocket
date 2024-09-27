import { TextP } from '@/comps/custom';
import { IconType } from 'react-icons';

export function DrawerRow(props: { title: string; icon?: IconType; onClick?: VoidFunction }) {
  const Icon = props.icon!;
  return (
    <div className="w-full flex items-center py-3" onClick={props.onClick}>
      {props.icon && <Icon className="mr-4" size={22} />}
      <TextP className={' font-semibold text-[15px]'}>{props.title}</TextP>
    </div>
  );
}

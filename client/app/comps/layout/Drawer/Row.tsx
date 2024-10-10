import { TextP } from '@/comps/custom';
import { AppStores, cn } from '@/lib';
import { IconType } from 'react-icons';

export function DrawerRow(props: { title: string; icon?: IconType; onClick?: VoidFunction; isActive?: boolean }) {
  const Icon = props.icon!;
  const store = AppStores.useSettingsStore();
  return (
    <div
      className={cn('w-full flex items-center py-3 px-4 cursor-pointer', props.isActive && 'bg-accent')}
      onClick={props.onClick}
    >
      {props.icon && <Icon className="mr-4" size={22} />}
      <TextP className={'font-normal text-[15px]'}>{props.title}</TextP>
    </div>
  );
}

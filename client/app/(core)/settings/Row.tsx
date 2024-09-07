import { TextH, TextP } from "@/comps";
import { cn } from "@/lib";
import { IconType } from "react-icons";
import { LuChevronRight } from "react-icons/lu";

export function RowItem(props: {
  title: string;
  subtitle: string;
  Icon: IconType;
  color?: string;
  onClick?: VoidFunction;
}) {
  const { Icon } = props;
  return (
    <div className="flex justify-between items-center py-2 border-b border-accent" onClick={() => props.onClick}>
      <div className="flex items-center justify-center">
        <Icon size={20} className={cn('text-primary mr-3')} />
        <div>
          <TextH v="h5" className={'text-card-foreground tracking-wide mb-1'}>
            {props.title}
          </TextH>
          <TextP className="text-muted">{props.subtitle}</TextP>
        </div>
      </div>
      <LuChevronRight size={20} onClick={props.onClick} />
    </div>
  );
}


export function InfoRowItem(props: { left: string; right: string; Icon: IconType; color?: string }) {
  const { Icon } = props;
  return (
    <div className="flex justify-between items-center py-2 border-b border-accent">
      <TextP className={'text-muted'}>{props.left} </TextP>
      <TextP className="font-semibold">{props.right}</TextP>
    </div>
  );
}


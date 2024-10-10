import { Token } from "@/lib";
import { TokenIcon } from "@/public/tokens/TokenIcon";
import { BiChevronDown } from "react-icons/bi";

export function TokenSelector(props: { onClick: VoidFunction; token: Token }) {
  return (
    <div
      className="bg-background border px-2 py-1 flex rounded-full items-center justify-center"
      onClick={() => {
        props.onClick();
      }}
    >
      <TokenIcon token={props.token} size="s" className="mr-1" />
      <p className="text-muted text-xs font-light mx-2">{props.token.symbol}</p>
      <BiChevronDown size={25} className="m-0" />
    </div>
  );
}

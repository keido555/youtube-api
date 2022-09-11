import { FC } from "react";
import Link from "next/link";

interface Props {
  open: boolean;
  id: string;
}

const NAV_ITEMS = [
  { href: "/", label: "トップ" },
  { href: "/monitor", label: "画像比較" },
  { href: "/youtube", label: "Youtube" },
];

export const Navigation: FC<Props> = ({ open, id }) => {
  return (
    <nav id={id} aria-hidden={!open} className="navigation">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className="navigation-list">{item.label}</a>
          </Link>
        );
      })}
    </nav>
  );
};

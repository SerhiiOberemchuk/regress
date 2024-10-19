import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import style from "./Header.module.css";

type Props = {
  link: LinkField;
  linkText: string | null;
  className?: string;
};

export default function HeaderLink({ link, linkText, className }: Props) {
  return (
    <PrismicNextLink className={clsx(style.link, className)} field={link}>
      {linkText}
    </PrismicNextLink>
  );
}

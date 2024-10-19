import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import styles from "./Header.module.css";
import clsx from "clsx";

type Props = {
  link: LinkField;
  linkText: string | null;
  className?: string;
};

export default function HeaderButton({ link, linkText, className }: Props) {
  return (
    <PrismicNextLink
      className={clsx(styles.headerButton, className)}
      field={link}
    >
      {linkText}
    </PrismicNextLink>
  );
}

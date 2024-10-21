import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./Footer.module.css";
import Container from "@/app/components/common/Container";
import clsx from "clsx";
/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(styles.section)}
      style={{
        backgroundImage: `url(${slice.primary.backgroundimage.url})`,
      }}
      id="footer"
    >
      <div className={styles.styleSection} style={{}}>
        <Container>
          <div className={styles.footer}>
            <div className={styles.image}>
              <PrismicImage
                field={slice.primary.imagehero}
                width={150}
                height={150}
              />
            </div>
            <PrismicRichText field={slice.primary.contactwithme} />
            <div className={styles.heroName}>
              <PrismicRichText field={slice.primary.name} />
              <PrismicRichText field={slice.primary.hobby} />
            </div>
            <ul className={styles.listLinks}>
              <li>
                <PrismicLink field={slice.primary.linkwhatsapp} />
              </li>
              <li>
                <PrismicLink field={slice.primary.linktelegram} />
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Footer;

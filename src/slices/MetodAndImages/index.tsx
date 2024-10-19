import Container from "@/app/components/common/Container";
import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./section.module.css";
import clsx from "clsx";

/**
 * Props for `SectionImage`.
 */
export type SectionImageProps = SliceComponentProps<Content.SectionImageSlice>;

/**
 * Component for "SectionImage" Slices.
 */
const SectionImage = ({ slice }: SectionImageProps): JSX.Element => {
  console.log(slice.primary.imagse);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      <Container>
        <ul className={styles.listTopImages}>
          {slice.primary.imagse.map((item) => (
            <li key={item.image.id}>
              <PrismicImage field={item.image} />
            </li>
          ))}
        </ul>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.descriptionmetod} />
        <ul>
          {slice.primary.descriptionmetodlist.map((item) => (
            <PrismicRichText field={item.itemlist} />
          ))}
        </ul>
        <PrismicRichText field={slice.primary.golofregress} />
        <PrismicRichText field={slice.primary.usefuldescription} />
      </Container>
    </section>
  );
};

export default SectionImage;

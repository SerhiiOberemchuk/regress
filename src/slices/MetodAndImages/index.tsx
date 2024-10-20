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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      <Container>
        <div className={styles.titleWrapper}>
          <ul className={styles.listTopImages}>
            {slice.primary.imagse.map((item) => (
              <li key={item.image.id}>
                <PrismicImage field={item.image} />
              </li>
            ))}
          </ul>
          <div className={styles.mainText}>
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className={styles.title}>{children}</h2>
                ),
              }}
            />
            <div className={styles.textWrapper}>
              <PrismicRichText
                field={slice.primary.descriptionmetod}
                components={{ paragraph: ({ children }) => <p>{children}</p> }}
              />
              <ul className={styles.listDescription}>
                {slice.primary.descriptionmetodlist.map((item, index) => (
                  <li key={index}>
                    <PrismicRichText field={item.itemlist} />
                  </li>
                ))}
              </ul>
            </div>
            <PrismicRichText field={slice.primary.golofregress} />
          </div>
        </div>

        <div className={styles.sectionBottomText}>
          <PrismicRichText field={slice.primary.usefuldescription} />
          <ul className={styles.listImagesBottom}>
            {slice.primary.imagesbotttom.map((item) => (
              <li key={item.image.id}>
                <PrismicImage field={item.image} width={360} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default SectionImage;

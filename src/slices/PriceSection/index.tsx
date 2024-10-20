import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./Price.module.css";
import Container from "@/app/components/common/Container";

/**
 * Props for `PriceSection`.
 */
export type PriceSectionProps = SliceComponentProps<Content.PriceSectionSlice>;

/**
 * Component for "PriceSection" Slices.
 */
const PriceSection = ({ slice }: PriceSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      <Container>
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className={styles.title}>{children}</h2>
            ),
          }}
        />
        <ul className={styles.list}>
          {slice.primary.pricelist.map((item, index) => (
            <li className={styles.item}>
              <PrismicImage field={item.iconplan} width={100} />
              <PrismicRichText
                field={item.titleplan}
                components={{
                  heading3: ({ children }) => (
                    <h3 className={styles.subtitle}>{children}</h3>
                  ),
                }}
              />
              <div className={styles.description}>
                <PrismicRichText field={item.includetitle} />
                {item.description1 && (
                  <PrismicRichText field={item.description1} />
                )}
                {item.description2 && (
                  <PrismicRichText field={item.description2} />
                )}
                {item.description3 && (
                  <PrismicRichText field={item.description3} />
                )}
                {item.description4 && (
                  <PrismicRichText field={item.description4} />
                )}
                {item.description5 && (
                  <PrismicRichText field={item.description5} />
                )}
                {item.description6 && (
                  <PrismicRichText field={item.description6} />
                )}
                {item.description7 && (
                  <PrismicRichText field={item.description7} />
                )}
                {item.description8 && (
                  <PrismicRichText field={item.description8} />
                )}
              </div>
              <PrismicRichText field={item.language} />
              <PrismicRichText field={item.price} />
              <PrismicLink field={item.linktosectionpayment}>
                <span className={styles.link}>{item.textlinkpaymant}</span>
              </PrismicLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PriceSection;

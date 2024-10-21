import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./Consultation.module.css";
import Container from "@/app/components/common/Container";
import { PrismicNextLink } from "@prismicio/next";
/**
 * Props for `Consultation`.
 */
export type ConsultationProps = SliceComponentProps<Content.ConsultationSlice>;

/**
 * Component for "Consultation" Slices.
 */
const Consultation = ({ slice }: ConsultationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      <Container>
        <PrismicRichText field={slice.primary.title} />
        <ul className={styles.list}>
          {slice.primary.list.map((item, index) => (
            <li className={styles.item} key={index}>
              <PrismicRichText field={item.price} />
              <div className={styles.descriptionBox}>
                <PrismicRichText field={item.titleinclud} />
                <PrismicRichText field={item.description1} />
                <PrismicRichText field={item.description2} />
                <PrismicRichText field={item.description3} />
                <PrismicRichText field={item.description4} />
                <PrismicRichText field={item.description5} />
              </div>
              <PrismicNextLink field={item.linktosection}>
                <span className={styles.link}>{item.titlelink}</span>
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Consultation;

import Container from "@/app/components/common/Container";
import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./Result.module.css";

/**
 * Props for `Results`.
 */
export type ResultsProps = SliceComponentProps<Content.ResultsSlice>;

/**
 * Component for "Results" Slices.
 */
const Results = ({ slice }: ResultsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      <Container>
        <PrismicRichText
          field={slice.primary.titleresultsection}
          components={{
            heading2: ({ children }) => (
              <h1 className={styles.title}>{children}</h1>
            ),
          }}
        />
        <div className={styles.descriptionSection}>
          <PrismicImage field={slice.primary.resultsectionimage} width={600} />
          <ul className={styles.resultList}>
            {slice.primary.resultslist.map((item) => (
              <li key={item.icon.id} className={styles.resultItem}>
                <PrismicImage field={item.icon} width={50} height={50} />
                <PrismicRichText field={item.titlelist} />
                <PrismicRichText field={item.itemdescription} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Results;

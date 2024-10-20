import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./Styles.module.css";
import Container from "@/app/components/common/Container";

/**
 * Props for `WhatYouNeed`.
 */
export type WhatYouNeedProps = SliceComponentProps<Content.WhatYouNeedSlice>;

/**
 * Component for "WhatYouNeed" Slices.
 */
const WhatYouNeed = ({ slice }: WhatYouNeedProps): JSX.Element => {
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
          {slice.primary.list.map((item, index) => (
            <li key={index} className={styles.item}>
              <PrismicImage field={item.icon} />
              <div>
                <PrismicRichText field={item.titleitem} />
                <PrismicRichText field={item.itemdescription} />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WhatYouNeed;

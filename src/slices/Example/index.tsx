import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import style from "./Example.module.css";
import Container from "@/app/components/common/Container";

/**
 * Props for `Example`.
 */
export type ExampleProps = SliceComponentProps<Content.ExampleSlice>;

/**
 * Component for "Example" Slices.
 */
const Example = ({ slice }: ExampleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.section}
    >
      <Container>
        <PrismicRichText
          field={slice.primary.examplestitle}
          components={{
            heading2: ({ children }) => (
              <h2 className={style.title}>{children}</h2>
            ),
          }}
        />
        <ul className={style.list}>
          {slice.primary.exampleslist.map((item, index) => (
            <li key={index} className={style.item}>
              <PrismicImage field={item.iconexample} />
              <PrismicRichText field={item.titleexample} />
              <PrismicRichText field={item.descriptionexample} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Example;

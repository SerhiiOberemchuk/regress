"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./Styles.module.css";
import Container from "@/app/components/common/Container";
import clsx from "clsx";
import { GrAdd } from "react-icons/gr";
import { useState } from "react";
/**
 * Props for `QuestionSection`.
 */
export type QuestionSectionProps =
  SliceComponentProps<Content.QuestionSectionSlice>;

/**
 * Component for "QuestionSection" Slices.
 */
const QuestionSection = ({ slice }: QuestionSectionProps): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      <Container>
        <PrismicRichText
          field={slice.primary.titlesection}
          components={{
            heading2: ({ children }) => (
              <h2 className={styles.title}>{children}</h2>
            ),
          }}
        />
        <ul className={clsx(styles.list)}>
          {slice.primary.listquestion.map((item, index) => (
            <li key={index} className={styles.item}>
              <button
                type="button"
                className={styles.buttonOpen}
                onClick={() => toggleQuestion(index)}
              >
                <PrismicRichText field={item.question} />
                <span
                  className={clsx(
                    styles.icon,
                    openIndex === index && styles.rotated,
                  )}
                >
                  <GrAdd width={40} height={40} />
                </span>
              </button>
              <div
                className={clsx(
                  styles.hidden,
                  openIndex === index && styles.opened,
                )}
              >
                <PrismicRichText field={item.answer} />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default QuestionSection;

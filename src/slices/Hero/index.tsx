import { TextSplitter } from "@/app/components/Hero/TextSplitter";
import { Pacifico } from "next/font/google";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/Hero/Bounded";

import clsx from "clsx";
import Container from "@/app/components/common/Container";
import styles from "./Hero.module.css";

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(styles.hero, "hero")}
    >
      <Container>
        <div className={styles.heroContainer}>
          <div className={clsx(styles.heroImage, styles.subgrid)}>
            <PrismicNextImage
              className={""}
              width={600}
              field={slice.primary.heroimage}
              alt=""
            />
          </div>
          <div className={clsx(styles.heroBody, styles.subgrid)}>
            <div className={styles.heroBodyFlex}>
              <h1 className={styles.title}>
                <TextSplitter
                  text={asText(slice.primary.heading)}
                  wordDisplayStyle="block"
                  className="hero-header-word"
                />
              </h1>
              <h2 className={clsx(pacifico.className, styles.heroName)}>
                {asText(slice.primary.heroname)}
              </h2>
              <div className={styles.textBody}>
                <PrismicRichText field={slice.primary.body} />

                <a href="tel:+380971768196">{slice.primary.telnumber}</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Bounded>
  );
};

export default Hero;

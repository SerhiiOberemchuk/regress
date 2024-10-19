"use client";
import { TextSplitter } from "@/app/components/Hero/TextSplitter";
import { Pacifico } from "next/font/google";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/Hero/Bounded";
// import Button from "@/app/components/Hero/Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import Image from "next/image";
import clsx from "clsx";
import Container from "@/app/components/common/Container";
import styles from "./Hero.module.css";
// import Scene from "./Scene";

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

gsap.registerPlugin(useGSAP, ScrollTrigger);
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl.set(".hero", { opacity: 1 }).from(".hero-header-word", {
      scale: 3,
      opacity: 0,
      ease: "power4.in",
      delay: 0.3,
      stagger: 1,
    });
    // .from(".hero-subheading", { opacity: 0, y: 30 }, "+=.8")
    // .from(".hero-body", { opacity: 0, y: 10 })
    // .from(".hero-button", { opacity: 0, y: 10, duration: 0.6 });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        // markers: true,
      },
    });

    scrollTl
      .fromTo(
        "body",
        {
          // backgroundColor: "#FDE047",
        },
        {
          // backgroundColor: "#D9F99D",
          overwrite: true,
        },
        1,
      )
      .from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".text-side-body", {
        y: 20,
        opacity: 0,
      });
  });
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${styles.hero} "hero"`}
    >
      <Container>
        <div className={styles.heroContainer}>
          <div className={clsx(styles.heroImage, styles.subgrid)}>
            <PrismicNextImage
              className=""
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
                {/* <PrismicRichText field={slice.primary.heroname} /> */}
              </h2>
              <div className={styles.textBody}>
                <PrismicRichText field={slice.primary.body} />

                <span>{slice.primary.telnumber}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Bounded>
  );
};

export default Hero;

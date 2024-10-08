"use client";
import { TextSplitter } from "@/app/components/TextSplitter";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/Bounded";
import Button from "@/app/components/Button";
gsap.registerPlugin(useGSAP);
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

    introTl
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.3,
        stagger: 1,
      })
      .from(".hero-subheading", { opacity: 0, y: 30 }, "+=.8")
      .from(".hero-body", { opacity: 0, y: 10 })
      .from(".hero-button", { opacity: 0, y: 10, duration: 0.6 });
  });
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero opacity-0"
    >
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header md:text-[9rem text-7xl font-black uppercase leading-[.8] text-orange-500 lg:text-[13rem]">
              <TextSplitter
                text={asText(slice.primary.heading)}
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <div className="hero-subheading my-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <div className="hero-body text-2xl font-normal text-sky-950">
              <PrismicRichText field={slice.primary.body} />
            </div>
            <Button
              buttonLink={slice.primary.button_link}
              buttonText={slice.primary.button_text}
              className="hero-button mt-12"
            />
          </div>
        </div>
        <div className="text-side z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <PrismicNextImage
            className="w-full md:hidden"
            field={slice.primary.cans_image}
          />
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
              <TextSplitter text={asText(slice.primary.second_heading)} />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950"></div>
            <PrismicRichText field={slice.primary.second_button} />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
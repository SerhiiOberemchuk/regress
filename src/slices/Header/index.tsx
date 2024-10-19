import HeaderButton from "@/app/components/Header/HeaderButtons";
import HeaderLink from "@/app/components/Header/HeaderLinks";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./header.module.css";
import Container from "@/app/components/common/Container";
/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 *
 *
 */

const Header = ({ slice }: HeaderProps): JSX.Element => {
  const languages = slice.primary.languages;
  console.log(languages);

  return (
    <header
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.header}
    >
      <Container>
        <div className={styles.content}>
          <nav className={styles.links}>
            <HeaderLink
              link={slice.primary.linkmetods}
              linkText={slice.primary.textlinkmetod}
            />
            <HeaderLink
              link={slice.primary.linkprice}
              linkText={slice.primary.textlinkprice}
            />
          </nav>
          <div className="">
            <nav className={styles.buttons}>
              <HeaderButton
                link={slice.primary.linksession}
                linkText={slice.primary.textlinksession}
              />
              <HeaderButton
                link={slice.primary.linkadvice}
                linkText={slice.primary.textlinkadvice}
              />
            </nav>

            {/* <div className="h-full">
            {slice.primary.languages.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
          </div> */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

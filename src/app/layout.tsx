import { Roboto } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./styles/app.css";
import Developer from "./components/DeveloperLink/Developer";
import Head from "next/head";

const roboto = Roboto({
  style: ["italic", "normal"],
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={roboto.className}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Regress",
              url: "https://regress.pro",
              sameAs: [
                "https://instagram.com/raisa.regres",
                "https://tiktok.com/@raisa.regres",
                // "https://facebook.com/your_facebook",
              ],
              logo: "https://regress.pro/logo.jpg",
            }),
          }}
        />
      </Head>
      <body className="">
        <main>{children}</main>
        <Developer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

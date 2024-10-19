import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./styles/app.css";
import Header from "./components/Hero/Header";
import ViewCanvas from "./components/Hero/ViewCanvas";

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
    <html lang="en" className={roboto.className}>
      <body className="">
        <main>{children}</main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

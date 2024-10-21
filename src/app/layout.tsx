import { Roboto } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./styles/app.css";
import Developer from "./components/DeveloperLink/Developer";

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
        <Developer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

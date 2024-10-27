import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: (prismic.asText(home.data.title) as string) ?? "Default Title",
    description:
      (home.data.meta_description as string) ?? "Default description",
    openGraph: {
      title: (home.data.meta_title as string) ?? "Default Open Graph Title",
      description:
        (home.data.meta_description as string) ??
        "Default Open Graph Description",
      url: "https://regress.pro",
      images: [{ url: (home.data.meta_image.url as string) ?? "" }],
      siteName: "Regress",
      type: "website",
    },
    alternates: {
      canonical: "https://regress.pro",
    },
  };
}
export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return <SliceZone slices={home.data.slices} components={components} />;
}

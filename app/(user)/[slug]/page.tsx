import { previewData } from "next/headers";
import PreviewSuspense from "../../../components/PreviewSuspense";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import RecentPost from "../../../components/molecules/RecentPost";
import SanityTextSerialiser from "../../../components/richText/SanityTextSerialiser";
import Hero, { HeroTitle, HeroSubtitle } from "../../../components/Hero";

const query = groq`
*[_type=='post'] {
  ...,
  author ->,
  categories[] ->
} | order(_createdAt desc)`;

export default async function page() {
    if (previewData()) {
        return (
          <PreviewSuspense
            fallback={
              <div role="status">
                <p className="animate-pulse text-center text-lg">
                  Loading Preview Data...
                </p>
              </div>
            }
          >
            {/* <PreviewBlogList query={query} /> */}
          </PreviewSuspense>
        );
      }
  const posts = await client.fetch(query);
  
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-2 md:px-5 max-w-[1080px]">
      <RecentPost
        title="Sit sit eiusmod labore dolor do ullamco velit."
        excerpt="Officia tempor nisi duis amet dolor pariatur est eu duis tempor sint voluptate. Sint ad consectetur labore eu exercitation ipsum magna irure cupidatat."
        tags={["incididunt", "sit", "veniam"]}
      />
      <section className="flex flex-col justify-center align-center">
        <SanityTextSerialiser value={posts[0].body} />
      </section>
    </div>
  );
}



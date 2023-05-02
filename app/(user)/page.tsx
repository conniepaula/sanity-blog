import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import FeaturedPost from "../../components/FeaturedPost";
import PostCard from "../../components/PostCard";
import Hero, { HeroTitle, HeroSubtitle } from "../../components/Hero";

const query = groq`
*[_type=='post'] {
  ...,
  author ->,
  categories[] ->
} | order(_createdAt desc)`;

const numberOfPosts = ["", "", "", "", "", "", "", "", "", ""];

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
    <div className="flex flex-col items-center gap-6 px-2 md:px-5 mb-24">
      <Hero>
        <HeroTitle>Connie Talks Tech</HeroTitle>
        <HeroSubtitle>
          Sit eiusmod labore labore do exercitation est id quis ea Lorem.
          Adipisicing sint est magna quis tempor pariatur eiusmod et nostrud.
        </HeroSubtitle>
      </Hero>
      <FeaturedPost post={posts[0]}/>
    </div>
  );
}

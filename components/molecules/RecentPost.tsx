import Link from "next/link";
import React from "react";
import ConditionalWrapper from "../atoms/ConditionalWrapper";
import HighlightWrapper from "../atoms/HighlightWrapper";
import ReadTime from "../atoms/ReadTime";
import Tag from "../atoms/Tag";

interface PostPreview {
  title: string;
  excerpt?: string;
  tags: string[];
  words?: number;
  slug?: string;
}

interface RecentPostProps extends PostPreview {
  className?: string;
}

function RecentPost(props: RecentPostProps) {
  const {
    className = "col-span-3",
    title,
    excerpt,
    tags,
    words,
    slug = "test",
  } = props;
  return (
    <HighlightWrapper
      className={`flex h-[504px]  w-full flex-col overflow-hidden rounded-lg bg-border-gradient p-[2px] ${className} ${
        slug ? "cursor-pointer" : ""
      }`}
    >
      <ConditionalWrapper
        condition={typeof slug !== "undefined"}
        wrapper={(children: React.ReactNode) => (
          <Link href={`blog/${slug}`} className={className}>
            {children}
          </Link>
        )}
      >
        <article className="relative h-[504px] overflow-hidden rounded-lg bg-zinc-950 ">
          <div className="relative">
            <img
              className="image-gradient h-auto w-full"
              src="/blake-connally-IKUYGCFmfw4-unsplash.jpg"
              object-fit="cover"
            />
          </div>
          <h3 className="absolute top-0 p-4 text-6xl font-semibold">{title}</h3>
          <div className="absolute bottom-0 z-10 flex w-full flex-col gap-2 p-4">
            <div className="flex justify-between">
              <div className="flex gap-1">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <ReadTime words={10} />
            </div>
            <p className="hyphens-auto break-words text-zinc-500 line-clamp-2">
              {excerpt}
            </p>
          </div>
        </article>
      </ConditionalWrapper>
    </HighlightWrapper>
  );
}

export default RecentPost;

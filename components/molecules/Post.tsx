import Link from "next/link";
import React from "react";
import ConditionalWrapper from "../atoms/ConditionalWrapper";
import HighlightWrapper from "../atoms/HighlightWrapper";
import ReadTime from "../atoms/ReadTime";
import Tag from "../atoms/Tag";

interface PostProps {
  className?: string;
  title: string;
  excerpt?: string;
  tags?: string[];
  words?: number;
  slug?: string;
}

function Post(props: PostProps) {
  const { title, className, excerpt = "", slug = "test" } = props;
  return (
    <HighlightWrapper
      className={`f-hull min-h-[246px] w-full overflow-hidden rounded-lg bg-border-gradient p-[2px] ${className} ${
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
        <div className="relative h-full min-h-[242px] overflow-hidden rounded-lg bg-zinc-950">
          <img
            src="/daniel-olah-TYpX940GS_U-unsplash.jpg"
            className="image-gradient absolute h-full w-full object-cover"
          />
          <div className="absolute bottom-0 flex flex-col gap-2 p-4">
            <div className="flex items-center justify-between">
              <Tag>ReactJS</Tag>
            </div>
            <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
            {excerpt && <span className="sm:hidden">{excerpt}</span>}
            <ReadTime words={5} />
          </div>
        </div>
      </ConditionalWrapper>
    </HighlightWrapper>
  );
}

export default Post;

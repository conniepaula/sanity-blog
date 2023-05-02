"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import CodeSnippet from "./CodeSnippet";

interface SanityTextSerialiserProps {
  value: any;
}
interface CodeSnippetProps {
  language: string;
  code: string;
  filename?: string;
  highlightedLines?: Array<number>;
}
const portableTextComponents: PortableTextComponents = {
  types: {
    image: (props) => {
      const { value, isInline } = props;
      console.log(props);
      const { width, height } = getImageDimensions(value);
      return (
        <img
          className="rounded-lg"
          src={urlBuilder()
            .projectId(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "")
            .dataset(process.env.NEXT_PUBLIC_SANITY_DATASET || "")
            .image(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt || " "}
          loading="lazy"
          style={{
            // Display alongside text if image appears inside a block text span
            display: isInline ? "inline-block" : "block",

            // Avoid jumping around with aspect-ratio CSS property
            aspectRatio: width / height,
          }}
        />
      );
    },
    code: ({ value }) => {
      return (
        <div className="py-5">
          <CodeSnippet {...value} />
        </div>
      );
    },
  },
  block: (props) => {
    const { value, children } = props;
    const { style } = value;
    let finalResult;
    switch (style) {
      case "h1":
        finalResult = (
          <h1 className="self-left text-4xl font-bold">{children}</h1>
        );
        break;
      case "h2":
        finalResult = <h2 className="text-3xl font-bold">{children}</h2>;
        break;
      case "h3":
        finalResult = (
          <h3 className="self-left text-2xl font-bold">{children}</h3>
        );
        break;
      case "h4":
        finalResult = <h4 className="text-xl font-bold">{children}</h4>;
        break;
      case "h5":
        finalResult = <h5 className="text-lg font-bold">{children}</h5>;
        break;
      case "h6":
        finalResult = <h6 className="text-base font-bold">{children}</h6>;
        break;
      case "blockquote":
        finalResult = (
          <blockquote className="text-base font-bold">{children}</blockquote>
        );
        break;
      default:
        finalResult = <p className="self-center text-base">{children}</p>;
    }
    return (
      <div className=" w-full max-w-[1000px] self-center py-3 text-left">
        {finalResult}
      </div>
    );
  },
};

function SanityTextSerialiser(props: SanityTextSerialiserProps) {
  const { value } = props;
  return <PortableText value={value} components={portableTextComponents} />;
}

export default SanityTextSerialiser;

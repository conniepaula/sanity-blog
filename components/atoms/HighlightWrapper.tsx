import Link from "next/link";
import React from "react";
import { Url } from "url";
import ConditionalWrapper from "./ConditionalWrapper";

interface HighlightWrapperProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

function HighlightWrapper(props: HighlightWrapperProps) {
  const { children, className = "", href } = props;

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-slate-800 p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-400 before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] before:hover:opacity-20 after:group-hover:opacity-100 ${className} `}
    >
      {children}
    </div>
  );
}

export default HighlightWrapper;

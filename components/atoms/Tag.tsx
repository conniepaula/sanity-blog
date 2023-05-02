import React from "react";

interface TagProps {
  tag?: string;
  children: React.ReactNode;
}

function Tag(props: TagProps) {
  const { tag = "" , children} = props;
  return (
    <span className="bg-primary-400/30 text-primary-400 text-xs p-1 rounded-md grow-0">
      {children}
    </span>
  );
}

export default Tag;

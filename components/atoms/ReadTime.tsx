import React from "react";

interface ReadTimeProps {
  words: number;
}

function ReadTime(props: ReadTimeProps) {
  const { words } = props;
  return (
    <span className="text-sm font-semibold text-zinc-100/70">
      {words} minute read
    </span>
  );
}

export default ReadTime;

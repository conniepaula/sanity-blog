import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroTitle(props: HeroElementProps) {
  const { children, className = "" } = props;
  return (
    <h1 className={`text-5xl font-bold md:text-7xl ${className}`}>
      {children}
    </h1>
  );
}

export function HeroSubtitle(props: HeroElementProps) {
  const { children, className = "" } = props;
  return <p className={`max-w-sm ${className}`}>{children}</p>;
}

function Hero(props: HeroProps) {
  const { children } = props;
  return (
    <div className="mb-5 flex flex-col items-center justify-between gap-2 px-10 py-5 text-center md:mb-10 md:gap-4">
      {children}
    </div>
  );
}

export default Hero;

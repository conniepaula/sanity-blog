import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

const Button = forwardRef(
  (props: ButtonProps, forwardedRef: React.Ref<HTMLButtonElement>) => {
    const { children, className, ...rest } = props;
    return (
      <button
        ref={forwardedRef}
        className={`rounded-md border border-zinc-700/60 bg-border-gradient p-2 outline-transparent transition-all hover:bg-zinc-700/80 ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;

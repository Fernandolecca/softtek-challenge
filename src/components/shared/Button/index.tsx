import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color: "primary" | "secondary";
  children: string;
};

export function Button({ children, color, className, ...rest }: Props) {
  const mapColorToModifier = {
    primary: "btn--primary-color",
    secondary: "btn--secondary-color"
  };

  return (
    <button
      className={`btn ${mapColorToModifier[color]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

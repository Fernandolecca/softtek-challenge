import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color: "primary" | "secondary";
  children: string;
};

export function Button({ children, color, ...rest }: Props) {
  const mapColorToModifier = {
    primary: "btn--primary-color",
    secondary: "btn--secondary-color"
  };

  return (
    <button className={`btn ${mapColorToModifier[color]}`} {...rest}>
      {children}
    </button>
  );
}

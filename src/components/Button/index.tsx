import React from "react";
import { Container } from "./styles";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: IButton) {
  return <Container {...props}>{children}</Container>;
}

export default Button;

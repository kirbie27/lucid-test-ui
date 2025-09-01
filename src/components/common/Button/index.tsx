/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./index.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  shrink?: boolean;
}
const Button = (props: ButtonProps) => {
  const { text, shrink = false, children, type, ...rest } = props;

  return (
    <button
      className={shrink ? styles.buttonSmall : styles.button}
      {...rest}
      type={type ? type : "button"}
    >
      {children}
      {text ? <span>{text}</span> : null}
    </button>
  );
};

export default Button;

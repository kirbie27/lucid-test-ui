/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./index.module.scss";

const FlexiRowMatrixLeftAlign = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { title, children, ...rest } = props;

  return (
    <>
      <div style={{}}>
        <div className={styles.title}>{title}</div>
        <div className={styles.container} {...rest}>
          {children}
        </div>
      </div>
    </>
  );
};

export default FlexiRowMatrixLeftAlign;

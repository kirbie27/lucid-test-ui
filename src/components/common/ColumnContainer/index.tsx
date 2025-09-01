"use client";

import React from "react";
import styles from "./index.module.scss";

const ColumnContainer = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, ...rest } = props;

  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
};

export default ColumnContainer;

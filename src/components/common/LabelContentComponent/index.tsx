/* eslint-disable @next/next/no-img-element */

import React from "react";
import styles from "./index.module.scss";
import { skeletonSizes } from "@/values";

export interface LabelContentComponent
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label?: string;
  content?: string;
  loading?: boolean;
  size?: skeletonSizes.small | skeletonSizes.medium | skeletonSizes.wide;
  highlight?: boolean;
}

const LabelContentComponent = (props: LabelContentComponent) => {
  const {
    children,
    label = "Label",
    content = "",
    loading = false,
    size = skeletonSizes.small,
    highlight,
    ...rest
  } = props;

  return (
    <div className={styles.LabelContentContainer} {...rest}>
      <span className={`${styles.label} dark:text-accent-foreground`}>
        {label}
      </span>
      <div className={styles.content}>
        {loading ? (
          <span className={styles.skeleton} style={{ width: `${size}` }}>
            {content}
          </span>
        ) : (
          <span
            className={`${highlight ? "text-orange" : "dark:text-white"} ${content === "--no change--" ? "italic" : ""}`}
          >
            {content == "" ? "No Information" : content}
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default LabelContentComponent;

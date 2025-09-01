/* eslint-disable @next/next/no-img-element */

import React from "react";
import styles from "./index.module.scss";

export interface LabelContentContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  header?: string;
}
const LabelContentContainer = (props: LabelContentContainerProps) => {
  const { header, children, ...rest } = props;

  return (
    <div className={styles.container} {...rest}>
      {header ? <span className={styles.header}>{header}</span> : null}
      {children}
    </div>
  );
};

export default LabelContentContainer;

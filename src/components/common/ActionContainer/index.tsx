import { HTMLAttributes } from "react";
import styles from "./index.module.scss";

export interface ActionContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ActionContainer = (props: ActionContainerProps) => {
  const { children, ...rest } = props;
  return (
    <div className={styles.buttonContainer} {...rest}>
      {children}
    </div>
  );
};

export default ActionContainer;

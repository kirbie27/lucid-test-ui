"use client";
import { HTMLAttributes } from "react";
import styles from "./index.module.scss";
import { cn } from "@/lib/utils";

export type ModalSize = "small" | "medium" | "medium2" | "large" | "xlarge";

export interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
  header?: string;
  show?: boolean;
  children?: React.ReactNode;
  size?: ModalSize;
}

const Modal = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}: ModalProps) => {
  const modalSize: any = { "modal-size": size };
  return (
    <>
      {show ? (
        <div className={cn(styles.modalBackground, "h-full")} role="modal-bg">
          <div
            className={cn(styles.modalContainer, "bg-background")}
            {...rest}
            //open={show}
            {...modalSize}
          >
            {/* Header Container */}
            <div className={styles.modalHeaderContainer}>
              <span className={cn(styles.modalHeader, "text-foreground")}>
                {header}
              </span>
            </div>
            {/* Content */}
            <div className={styles.contentContainer}>{children}</div>
            {/* Footer Cntainer */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

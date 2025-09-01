import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

import styles from "./index.module.scss";

export const SideFilterStationary = (props: any) => {
  const {
    header = "Filter Option",
    isOpen = true,
    toggleSideNav = () => {},
    children,
    ...rest
  } = props;

  return (
    <div
      className={`${isOpen ? styles.sideFilter : styles.sideFilterHidden} dark:bg-primary`}
    >
      <div className={styles.hideButton} onClick={toggleSideNav}>
        <div className="dark:text-white">{header}</div>
        <hr className={styles.line} />
        {isOpen ? (
          <FaChevronCircleUp
            size="1.3rem"
            className={styles.HiddenOnBigScreen}
          />
        ) : (
          <FaChevronCircleDown
            size="1.3rem"
            className={styles.HiddenOnBigScreen}
          />
        )}
      </div>

      <div
        className={
          isOpen
            ? styles.filterFieldContainer
            : styles.filterFieldContainerHidden
        }
      >
        {children}
      </div>
    </div>
  );
};

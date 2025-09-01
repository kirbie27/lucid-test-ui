/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./index.module.scss";

export interface StepsMakerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data?: string[];
  handleStepChange?: () => void;
  stepValue?: number;
}

const StepsMaker = (props: StepsMakerProps) => {
  const { data = [], stepValue = 0 } = props;

  return (
    <div className={styles.stepsRow}>
      <hr
        style={data.length > 6 ? { width: "90%" } : { width: "80%" }}
        className={styles.line}
      />

      <hr
        className={styles.loadline}
        style={{ width: `${((stepValue + 1) / data.length) * 100}%` }}
      />
      {data.map((x, i) => {
        return (
          <div
            key={i}
            style={{
              width: "200px",
              justifyContent: "start",
            }}
            className={
              stepValue == i ? styles.stepColumnActive : styles.stepColumn
            }
          >
            <div
              className={`${
                stepValue == i
                  ? styles.outerCircleActive + ` dark:border-white`
                  : styles.outerCircle + " dark:border-primary"
              } dark:bg-primary`}
            >
              <div
                className={`${
                  stepValue == i ? styles.innerCircleActive : styles.innerCircle
                } dark:border-black`}
              >
                <h1
                  className={`${
                    stepValue == i
                      ? styles.numberActive + " dark:text-white"
                      : styles.number
                  } `}
                >
                  {i + 1}
                </h1>
              </div>
            </div>
            <div className={styles.columnDiv}>
              <p className={styles.smallText}>
                Step {i + 1} of {data.length}
              </p>
              <p
                style={{ textAlign: "center" }}
                className={
                  stepValue == i
                    ? styles.labelActive + " dark:text-white"
                    : styles.label
                }
              >
                {data[i]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepsMaker;

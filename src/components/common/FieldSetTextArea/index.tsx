import React, { TextareaHTMLAttributes } from "react"
import styles from "./index.module.scss"

export interface FieldSetTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string
}

// eslint-disable-next-line react/display-name
const FieldSetTextArea = React.forwardRef<
  HTMLTextAreaElement,
  FieldSetTextAreaProps
>((props: FieldSetTextAreaProps, ref) => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend>{props.placeholder}</legend>
        <textarea {...props} ref={ref} />
      </fieldset>
    </>
  )
})

export default FieldSetTextArea

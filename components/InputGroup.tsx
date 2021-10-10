import { InputGroupType } from "./InputGroupType";
import styles from "./InputGroup.module.css"
import { createUID } from "../utils/utils";

export const InputGroup = ({text} : InputGroupType) => {
  const id = createUID(15)
  return (
    <div className={styles.InputGroup}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{text}</label>
    </div>
  )
}
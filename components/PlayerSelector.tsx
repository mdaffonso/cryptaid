import { createUID } from "../utils/utils"
import { PlayerSelectorType } from "./PlayerSelectorType"
import styles from "./PlayerSelector.module.css"

export const PlayerSelector = ({text, color, changeHandler}: PlayerSelectorType) => {
  const id = createUID(16)
  return (
    <div className={styles.PlayerSelector}>
      <input type="checkbox" id={id} onChange={changeHandler} />
      <label htmlFor={id} className={styles[color]}>{text}</label>
    </div>
  )
}
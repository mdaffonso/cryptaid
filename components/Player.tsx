import { PlayerType } from "./PlayerType"
import styles from "./Player.module.css"
import { InputGroup } from "./InputGroup"
import { Fragment } from "react"

export const Player = ({color, pro}: PlayerType) => {
  const data = [
    { 
      key: 1,
      category: "É um de dois tipos de terreno:",
      values: [
        "É uma floresta ou um deserto",
        "É uma floresta ou um lago",
        "É uma floresta ou um pântano",
        "É uma floresta ou uma montanha",
        "É um deserto ou um lago",
        "É um deserto ou um pântano",
        "É um deserto ou uma montanha",
        "É um lago ou um pântano",
        "É um lago ou uma montanha",
        "É um pântano ou uma montanha"
      ]
    },
    {
      key: 2,
      category: "Está a até 1 espaço de um tipo de terreno ou território de animal:",
      values: [
        "Está a até 1 espaço de uma floresta",
        "Está a até 1 espaço de um deserto",
        "Está a até 1 espaço de um lago",
        "Está a até 1 espaço de um pântano",
        "Está a até 1 espaço de uma montanha",
        "Está a até 1 espaço de um território de animal"
      ]
    },
    {
      key: 3,
      category: "Está a até 2 espaços de um tipo de território de animal ou de um tipo de estrutura:",
      values: [
        "Está a até 2 espaços de uma rocha vertical",
        "Está a até 2 espaços de uma cabana abandonada",
        "Está a até 2 espaços de um território de puma",
        "Está a até 2 espaços de um território de urso"
      ]
    },
    {
      key: 4,
      category: "Está a até 3 espaços de uma cor de estrutura:",
      values: [
        "Está a até 3 espaços de uma estrutura azul",
        "Está a até 3 espaços de uma estrutura branca",
        "Está a até 3 espaços de uma estrutura verde",
        "Está a até 3 espaços de uma estrutura preta",
      ]
    },
    { 
      pro: true,
      key: 5,
      category: "NÃO é um de dois tipos de terreno:",
      values: [
        "NÃO é uma floresta ou um deserto",
        "NÃO é uma floresta ou um lago",
        "NÃO é uma floresta ou um pântano",
        "NÃO é uma floresta ou uma montanha",
        "NÃO é um deserto ou um lago",
        "NÃO é um deserto ou um pântano",
        "NÃO é um deserto ou uma montanha",
        "NÃO é um lago ou um pântano",
        "NÃO é um lago ou uma montanha",
        "NÃO é um pântano ou uma montanha"
      ]
    },
    {
      pro: true,
      key: 6,
      category: "NÃO está a até 1 espaço de um tipo de terreno ou território de animal:",
      values: [
        "NÃO está a até 1 espaço de uma floresta",
        "NÃO está a até 1 espaço de um deserto",
        "NÃO está a até 1 espaço de um lago",
        "NÃO está a até 1 espaço de um pântano",
        "NÃO está a até 1 espaço de uma montanha",
        "NÃO está a até 1 espaço de um território de animal"
      ]
    },
    {
      pro: true,
      key: 7,
      category: "NÃO está a até 2 espaços de um tipo de território de animal ou de um tipo de estrutura:",
      values: [
        "NÃO está a até 2 espaços de uma rocha vertical",
        "NÃO está a até 2 espaços de uma cabana abandonada",
        "NÃO está a até 2 espaços de um território de puma",
        "NÃO está a até 2 espaços de um território de urso"
      ]
    },
    {
      pro: true,
      key: 8,
      category: "NÃO está a até 3 espaços de uma cor de estrutura:",
      values: [
        "NÃO está a até 3 espaços de uma estrutura azul",
        "NÃO está a até 3 espaços de uma estrutura branca",
        "NÃO está a até 3 espaços de uma estrutura verde",
        "NÃO está a até 3 espaços de uma estrutura preta"
      ]
    },
  ]

  return (
    <div className={styles.Player} style={{backgroundColor: color}}>
      {
        data.map(entry => (
          (pro || !pro && !entry.pro)
            && <Fragment key={entry.key}>
              <h2>{entry.category}</h2>
              {
                entry.values.map(value => (
                  ((!pro && value !== "Está a até 3 espaços de uma estrutura preta")
                  || pro)
                    && <InputGroup key={value} text={value} />
                ))
              }
            </Fragment>
        ))
      }
    </div>
  )
}
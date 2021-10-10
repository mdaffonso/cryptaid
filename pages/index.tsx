import type { NextPage } from 'next'
import Head from "next/head"
import { useState } from 'react'
import { Color } from '../components/ColorEnum'
import { ConfigType } from '../components/ConfigType'
import { Player } from '../components/Player'
import { PlayerSelector } from '../components/PlayerSelector'
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const [setup, setSetup] = useState(true)
  const [config, setConfig] = useState<ConfigType>({})

  const players: any[] = [
    [Color.Red, "Vermelho", "#4a0000"],
    [Color.Blue, "Azul", "#102a3c"],
    [Color.Brown, "Marrom", "#300d2c"],
    [Color.Green, "Verde", "#102e10"],
    [Color.Purple, "Roxo", "#36290e"]
  ]

  const toggleOption = (option: string) => {
    if(!config.hasOwnProperty(option)) {
      setConfig(curr => ({
        ...curr,
        [option]: true
      }))  
    } else {
      setConfig(curr => {
        delete curr[option]
        return { ...curr }
      })
    }
  }

  const start = () => {
    const configWithoutPro = Object.keys(config).filter(v => v !== "pro")
    if (configWithoutPro.length < 2) {
      alert("No mínimo 2 jogadores devem ser selecionados")
      return
    }

    setSetup(false)
  }

  return (
    <>
      <Head>
        <title>Cryptaid | Auxílio eletrônico para o jogo Cryptid</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      {
        setup
          ? <div className={styles.Setup}>
              <h2>Jogadores</h2>
              <div>
                {
                  players.map(player => (
                    <PlayerSelector color={player[0]} text={player[1]} changeHandler={() => toggleOption(player[0])} key={player[0]} />
                  ))
                }
              </div>
              
              <div className={styles.ProMode}>
                <input type="checkbox" id="promode" onChange={() => toggleOption("pro")} />
                <label htmlFor="promode">Modo avançado</label>
              </div>

              <button onClick={start}>Iniciar</button>
            </div>
          : <div className={styles.Main}>
              { config[Color.Red] && <Player color="#4a0000" pro={config.pro} /> }
              { config[Color.Blue] && <Player color="#102a3c" pro={config.pro} /> }
              { config[Color.Green] && <Player color="#102e10" pro={config.pro} /> }
              { config[Color.Brown] && <Player color="#300d2c" pro={config.pro} /> }
              { config[Color.Purple] && <Player color="#36290e" pro={config.pro} /> }
            </div>
      }
    </>
  )
}

export default Home

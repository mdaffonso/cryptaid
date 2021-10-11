import type { NextPage } from 'next'
import { useState } from 'react'
import { Color } from '../components/ColorEnum'
import { ConfigType } from '../components/ConfigType'
import { Player } from '../components/Player'
import { PlayerSelector } from '../components/PlayerSelector'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../styles/Home.module.css"
import Head from 'next/head'

const Home: NextPage = () => {
  const [setup, setSetup] = useState(true)
  const [config, setConfig] = useState<ConfigType>({})

  const players: any[] = [
    [Color.Red, "Vermelho", "#4a0000"],
    [Color.Blue, "Azul", "#102a3c"],
    [Color.Brown, "Marrom", "#36290e"],
    [Color.Green, "Verde", "#102e10"],
    [Color.Purple, "Roxo", "#300d2c"]
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
      toast("No mínimo 2 jogadores devem ser selecionados")
      return
    }

    setSetup(false)
  }

  return (
    <>
      <Head>
        <title>Cryptaid | Auxílio eletrônico para o jogo Cryptid</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
              <ToastContainer />
            </div>
          : <div className={styles.Main}>
              {
                players.map(v => (
                  config.hasOwnProperty(v[0]) && <Player color={v[2]} pro={config.pro} key={v[1]} />
                ))
              }
              <button className={styles.Replay} onClick={() => location.reload()}>Jogar novamente</button>
            </div>
      }
    </>
  )
}

export default Home

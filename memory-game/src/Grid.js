import { useState } from 'react'
import CardPattern from './assets/moroccan-flower-dark.png'
import Bilbo from './assets/bilbo-baggins.png'
import Cameron from './assets/cameron-poe.png'
import Nikki from './assets/nikki-cage.png'
import Pollux from './assets/pollux-troy.png'

import styles from './UI.module.css'

const cardImages = [{src: Bilbo}, {src: Cameron}, {src: Nikki}, {src: Pollux}]

export default function Grid(props) {

  // a function to double our cars (so each has a duplicate)
  // and then shuffle the deck ... and deal them on the screen
  const shuffleCards = () => {

  }

  return (
    <>
      <button>New Game</button>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Card img={Bilbo} />
          <Card img={Cameron} />
          <Card img={Nikki} />
          <Card img={Pollux} />
        </div>
      </div>
    </>
  )
}

function Card(props) {
  return (
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={props.img} alt="card front" />
        </div>
      </div>
    </div>
  )
}

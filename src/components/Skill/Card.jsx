import React from 'react'
import styles from "./Skill.module.css"

const Card = ({data}) => {
  return (
    <div className={styles.card}>
    <div className={styles.image}>
    <img src={data.image}></img>
    </div>
    <p>{data.name}</p>
    <p></p>

    </div>
  )
}

export default Card
import React from 'react'
import styles from "./Skill.module.css"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { useState } from "react"
import Card from "./Card"


const Skill = ({ data }) => {

  // const [index, setIndex] = useState(0);

  // // setTimeout(leftHandler,2000)
  // function leftHandler(event) {
  //   index > 0 ? (setIndex(index - 1)) : (setIndex(data.length - 1))
  // }

  // function rightHandler() {
  //   index === data.length - 1 ? (setIndex(0)) : (setIndex(index + 1))
  // }
  return (

  
      <div id="Skills" className={styles.skillContainer}>
      
      

        {/* <div className={styles.image}>
        <FaChevronLeft onClick={leftHandler} />
        <img src={data[index].image} className={styles.img} />
        <FaChevronRight onClick={rightHandler} />
      </div> */}
        {
          data.map((data) => (
            <Card data={data}></Card>
          ))
        }
      </div>


  )
}

export default Skill
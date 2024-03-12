import React from 'react'
import {useState} from "react"
import styles from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
{/* <RxCross2 /> */}







const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false);
    return (
        <div>
            <nav className={styles.container}>
                <div className={styles.title}>
                    <h2>Portfolio</h2>
                </div>
                <div className={styles.menuItemsPhone}>

                    <ul className={styles.menuItems} 
                     >
                <div className={styles.menuBtn}>
                {
                    menuOpen?(<RxCross2 onClick={()=>setMenuOpen(!menuOpen)} />):(<RxHamburgerMenu onClick={()=>setMenuOpen(!menuOpen)}/>)
                }
                </div>
                <div className={`${styles.list} ${menuOpen && styles.menuOpen}`}>

                        <li >
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                        <li>
                            <a href="#Skills">Skills</a>
                        </li>
                        </div>

                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
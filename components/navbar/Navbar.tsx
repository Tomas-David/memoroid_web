'use client'
import Link from "next/link";
import classes from "./Navbar.module.css";
import logo from "@/public/logo.svg"
import Image from "next/image";
import { useState } from "react";




export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className={classes.navbar}>
              <li className={classes.navbar_menu_item}>
          <Link href="/" className={classes.navbar_menu_link}><Image src={logo} alt="Memoroid Logo" width={48} height={48} />
 <span className={classes.brand}>Memoroid</span></Link>
        </li>
      <div className={classes.ham} onClick={toggleMenu}>
        <span className={classes.ham_line}></span>
        <span className={classes.ham_line}></span>
        <span className={classes.ham_line}></span>
      </div>
      <menu className={`${classes.navbar_menu} ${isOpen ? classes.navbar_menuOpen : classes.navbar_menuClose}`}>

        <li className={classes.navbar_menu_item}>
          <Link href="/support" className={classes.navbar_menu_link}>Podpora</Link>
        </li>
        <li className={classes.navbar_menu_item}>
          <Link href="/privacy-policy" className={classes.navbar_menu_link}>Ochrana dat</Link>  
        </li>
      </menu>
    </nav>
  );
}



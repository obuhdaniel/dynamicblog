import Link from "next/link"
import styles from "@/styles/NavBar.module.css"
import SearchBar from "./SearchBar2"


export default function NavBar (){
    return(
        <div className={styles.hero}>
            <nav className={styles.nav}>
                    <Link href={'/'}>
                    <h2 className={styles.logo}>SABIzone<sup>™</sup></h2>
                    </Link>
                    
                    <ul className={styles.list}>

                        <li className={styles.lst}><Link href={'/movies'}> Movies </Link> </li>
                        <li><Link href={'/series'}> Series </Link> </li>
                        <li><Link href={'/kdramas'}>K-Dramas</Link></li>
                        <li><Link href={'/anime'}>Animes</Link></li>
                    </ul>
                    
                    
            </nav>
            
        </div>
        
        
    )
}
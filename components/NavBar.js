import Link from "next/link"
import styles from "@/styles/NavBar.module.css"


export default function NavBar (){
    return(
        <div className={styles.hero}>
            <nav className={styles.nav}>
                    <Link href={'/'}>
                    <h2 className={styles.logo}>235 Movies</h2>
                    </Link>
                    
                    <ul className={styles.list}>
                        <li> <Link href={'/'}> Home </Link> </li>
                        <li><Link href={'/latest'}> Latest </Link> </li>
                        <li>Movies</li>
                        <li>Series</li>
                        <li>K-DRAMAs</li>
                        <li>Anime</li>
                    </ul>
                    
            </nav>
            
        </div>
    )
}
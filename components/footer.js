import styles from '@/styles/Footer.module.css'

import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter, FaXTwitter } from "react-icons/fa6";

export default function Footer(){

    return(
        <div className={styles.footer}>
      <div className={styles.heading}>
        <h2>SABIzone<sup>™</sup></h2>
        <h6>© 2024 Sabizone</h6>
      </div>
      <div className={styles.content}>
        <div className={styles.services}>
          <h4>Menus</h4>
          <p><a href="/series">Home</a></p>
          <p><a href="/dmca">DMCA</a></p>
          <p><a href="https://forms.gle/KSSAMG8i5Ex9Kgbq5">Contact us</a></p>
          <p><a href="https://forms.gle/KSSAMG8i5Ex9Kgbq5">Advertise</a></p>
        </div>
        <div>
          <h4>Social</h4>
          <p>
            <a href="#"> Telegram <FaTelegramPlane /> </a
            >
          </p>
          <p>
            <a href="#"
              > Twitter <FaXTwitter /></a
            >
          </p>
          
          
        </div>
        
        
      </div>
      <footer>
        <hr />
        
      </footer>
    </div>
    )
    }
  


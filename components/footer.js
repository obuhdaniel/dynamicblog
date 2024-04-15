import styles from '@/styles/Footer.module.css'
import Link from 'next/link';

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
          <p><Link href={'/'}>Home</Link></p>
          <p><Link href={'/dmca'}>Home</Link></p>
          <p><Link href={'https://forms.gle/KSSAMG8i5Ex9Kgbq5'}>Contact Us</Link></p>
          <p><Link href={'https://forms.gle/KSSAMG8i5Ex9Kgbq5'}>Advertise</Link></p>
        </div>
        <div>
          <h4>Social</h4>
          <p>
          <Link href={'https://twitter.com'}>Twitter <FaXTwitter/></Link>
          </p>
          <p>
            <Link href={'https://telegram.org'}>Telegram <FaTelegramPlane/></Link>
          </p>
          
          
        </div>
        
        
      </div>
      <footer>
        <hr />
        
      </footer>
    </div>
    )
    }
  


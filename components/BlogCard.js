import Link from "next/link"
import styles from "../styles/BlogCard.module.css"

export default function BlogPost({title,author, coverPhoto, datePublished, slug}){
    return(
        
        
            <div className={styles.item}>
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                            <Link href={"/posts/" + slug} ><img src={coverPhoto.url} alt="" srcset="" /></Link>
                    </div>
                    <div className={styles.text}>
                        <Link href={"/posts/" + slug} ><h1 className={styles.title}> {title}</h1></Link>   
                        
                        <h3 className={styles.date}>{datePublished}</h3>

                       <Link href={"/categories/" + author.name} > <span className={styles.cat}>Category: {author.name}</span> </Link>

                        
                    </div>
                </div>
            </div>
     

        
    )
}
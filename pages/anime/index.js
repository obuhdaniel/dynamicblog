import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import { GraphQLClient,gql } from 'graphql-request';
import BlogCard from '@/components/BlogCard';
import NavBar from '@/components/NavBar';
import { revalidatePath } from 'next/cache';
import SearchBar from '@/components/SearchBar';
import SearchResults from '@/components/SearcResults';
import SearchBar2 from '@/components/SearchBar2';
import Footer from '@/components/footer';


const graphcms =new GraphQLClient("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clqnoifflon4t01uk22m41omv/master");
const QUERY =   gql `
  {
    posts(where: {author: {id: "clqnq0m6x7hec0alcvxza6dcg"}}){
      id,
      title,
      datePublished,
      slug,
      content{html}
      author{
        name
      }
      coverPhoto{
        url
      }
    }
  }`




export async function getStaticProps(){
  const {posts} = await graphcms.request(QUERY)
  return{
    props: {
      posts,
    },
    revalidate: 10
  }
}



export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>9jaClix: Download Best movies and Series her</title>
        <meta name="description" content="Download the latest Tv series and Movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${styles.main}`}>


        
 
        <NavBar/>

        <div className={styles.latest}>
        <h1 className={styles.header}>Animes is Comming Soon here</h1>
        </div>
 
        
        
          

       <Footer/>
      </main>
    </>
  )
}

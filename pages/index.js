import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import { GraphQLClient,gql } from 'graphql-request';
import BlogCard from '@/components/BlogCard';
import NavBar from '@/components/NavBar';
import { revalidatePath } from 'next/cache';


const graphcms =new GraphQLClient("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clqnoifflon4t01uk22m41omv/master");
const QUERY =   gql `
  {
    posts(orderBy: datePublished_DESC){
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
        <title>JoloFlix</title>
        <meta name="description" content="Download the latest Tv series and Movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${styles.main}`}>

        <NavBar/>
        <h1 className={styles.header}>Currently Rebuilding init</h1>
        {/*
        <NavBar/>
        <h1 className={styles.header}>Recently updated</h1>

        <div className={styles.band}>
        {posts.map((post)=> (
          <BlogCard 
            title= {post.title}
            author= {post.author}
            coverPhoto = {post.coverPhoto}
            key = {post.id}
            datePublished = {post.datePublished}
            slug = {post.slug}
          
          
          />
        ))}
        </div>
        
        <Footer/>
        
        
        */}
        
      </main>
    </>
  )
}

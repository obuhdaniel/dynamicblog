
import Head from 'next/head';
import styles from '@/styles/Slug.module.css';
import { GraphQLClient,gql } from 'graphql-request';

import NavBar from '@/components/NavBar';
import Link from 'next/link';
import Footer from '@/components/footer';


const graphcms =new GraphQLClient("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clqnoifflon4t01uk22m41omv/master");
const QUERY =   gql `
  query Post($slug: String!){
    post (where: {slug: $slug}){
      id,
      title,
      datePublished,
      slug,
      trailer,
      download,
      content{html}
      author{
        name
      }
      content{
        html
      }
      coverPhoto{
        url
      }
      genres{
        genre
      }
    }
  }`;

  const QUERY_RELATED =   gql `
  {
    posts(where: {genres_every: {genre: "supes"}}) {
      id
      title
      genres{
        genre
      }
    }
  }`



const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths(){
  const {posts} = await graphcms.request(SLUGLIST);
  return{
    paths: posts.map((post) => ({params: {slug: post.slug}})),
    fallback: false,

  };
}

export async function getStaticProps({params}){
  const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const related = await graphcms.request(QUERY_RELATED);
  
  const post = data.post;
  return{
    props: {
      post,
    },

    revalidate: 10,
  }
}

export async function getStaticProps2(){
  const related = await graphcms.request(QUERY_RELATED);
  console.log
  return{
    props: {
      related,
    },
    revalidate: 10
  }
}


export default function BlogPost({ post }, {related}){
  console.log(post)
  return (
    <>
    <Head>
    <title>{post.title}</title>
        <meta name="description" content= {"Download " + post.title + "Download more free series only on SABIZONW."}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={post.coverPhoto.url} />
    </Head>
    <main className={styles.blog}>
      <NavBar/>
      <div className={styles.wrapper}>
        <h2 className={styles.head}>{post.author.name}: {post.title}</h2> 
        <div className={styles.img}><img src={post.coverPhoto.url} className={styles.cover} alt="" /></div>
        <div className={styles.title}>
          <div className={styles.authText}>
            <h6> Category: {post.author.name}</h6>
            <h6> Tags: {post.genres.genre}</h6>
            <h6 className={styles.date}>Updated: {post.datePublished}</h6>
          </div>
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={
            {__html: post.content.html}
          }
        
        ></div>
        <div
        className={styles.trailer}
        dangerouslySetInnerHTML={{__html: post.trailer}}

        ></div>
        <div>
          <button className={styles.download}>
            <Link href={post.download}>
            Download
            </Link>
            
          </button>
        </div>

      </div>

      <div>
        <h2>
          More Like this
        </h2>
       
        </div>

        <div>
        <h2>
          Recently Updated
        </h2>
      </div>

      <Footer />
      
    </main>
    </>
  )
}
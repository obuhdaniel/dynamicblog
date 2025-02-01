import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '@/components/BlogCard';
import NavBar from '@/components/NavBar';
import { revalidatePath } from 'next/cache';
import { useState} from 'react';
import SearchBar from '@/components/SearchBar2'; // Assuming SearchBar2 is the correct component
import Footer from '@/components/footer';

const graphcms = new GraphQLClient(
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clqnoifflon4t01uk22m41omv/master"
);

const QUERY = gql`
  {
    posts(orderBy: datePublished_DESC, first: 30) {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
      }
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts); // Use filteredPosts for search results

  const handleSearch = (term) => {
    if (!term) {
      setFilteredPosts(posts); // Reset to all posts if search term is empty
      return;
    }

    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(term.toLowerCase()) ||
      post.content.html.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handleChange = (event) => {
    if (event.target) { // Check if event.target exists
      setSearchTerm(event.target.value);
      onChange && onChange(event.target.value);
    }
  };
  

  return (
    <>
      <Head>
        <title>SABIzone: Download Best movies and Series Here</title>
        <meta name="description" content="Download the latest Tv series and Movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <NavBar />

      <div className={styles.goodbyeContainer}>
        <h1 className={styles.header}>Goodbye, and Thank You for Watching with Us</h1>
        <p className={styles.message}>
          Dear SZONE Community,
        </p>
        <p className={styles.message}>
          With a heavy heart, we announce that SZONE is closing its doors. This journey has been an incredible one—filled with stories that made us laugh, cry, and think deeply. Every movie, every discussion, and every moment shared on this platform was made special because of <strong>you</strong>—our dedicated viewers.
        </p>
        <p className={styles.message}>
          From the latest releases to hidden gems, SZONE was more than just a movie-viewing platform; it was a space where film lovers connected, explored, and found comfort in storytelling. We are immensely grateful for your support, your passion, and the time you spent with us.
        </p>
        <p className={styles.message}>
          Though this chapter ends, the love for cinema never fades. Keep discovering, keep watching, and keep sharing stories that inspire you.
        </p>
        <p className={styles.message}>
          Thank you for being part of SZONE. This isn ot just a goodbye—it is a heartfelt <strong>thank you</strong>.
        </p>
        <p className={styles.signature}>With gratitude, <br/> <strong>The SZONE Team</strong></p>
      </div>
      
      <Footer />
    </main>
    </>
  );
}

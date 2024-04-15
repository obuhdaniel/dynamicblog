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
    posts(orderBy: datePublished_DESC) {
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
    revalidate: 10, // Revalidate data every 10 seconds
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

      <main className={`${styles.main}`}>
        <NavBar />

        <SearchBar term={searchTerm} onChange={handleChange} onSearch={handleSearch} />

        <div className={styles.latest}>
          <h1 className={styles.header}>Latest</h1>
        </div>

        {filteredPosts.length > 0 ? ( // Display filtered posts based on search term
          <div className={styles.band}>
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                author={post.author}
                coverPhoto={post.coverPhoto}
                datePublished={post.datePublished}
                slug={post.slug}
              />
            ))}
          </div>
        ) : (
          searchTerm && ( // Display message if no results found
            <p>No results found</p>
          )
        )}

      <Footer/>
        
      </main>
    </>
  );
}

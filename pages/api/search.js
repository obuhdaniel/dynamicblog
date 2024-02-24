import { GraphQLClient, gql } from 'graphql-request';

// Your Hygraph endpoint with corrected formatting (use a valid URL)
const graphcms = new GraphQLClient('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clqnoifflon4t01uk22m41omv/master'); // Replace with your actual URL

const SEARCH_QUERY = gql`
query MyQuery {
  posts(where: {title_contains: "family"}) {
    title
    id
    slug
    trailer
    datePublished
    coverPhoto {
      url
    }
  }
}

`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Invalid request method' });
  }

  const { searchTerm } = req.body;

  if (!searchTerm) {
    return res.status(400).json({ error: 'Search term is required' });
  }

  try {
    const { data, errors } = await graphcms.request(SEARCH_QUERY);

    if (errors) {
      console.error('GraphQL errors:', errors);
      return res.status(500).json({ error: 'Internal server error' }); // More specific error message if possible
    }

    res.status(200).json(data.posts);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'Internal server error' }); // More specific error message if possible
  }
}

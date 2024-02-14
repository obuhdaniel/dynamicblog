import { GraphQLClient,gql } from 'graphql-request'; //graph


//my hygraph endpoinbt
const graphcms =new GraphQLClient("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clqnoifflon4t01uk22m41omv/master");
export default async function handler(req, res) {
    const { searchTerm } = req.body;
  
    const query = `
      query {
        posts(fullTextSearch: { query: "${searchTerm}" }) {
            id,
            title,
            datePublished,
            slug,
            coverPhoto{
                url
            }
          
        }
      }
    `;
  
    try {
      const data = await request(endpoint, query);
      // Implement TF-IDF ranking or other similarity logic here
      res.status(200).json(data.posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
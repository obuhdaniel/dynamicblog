

export default function SearchResults({ results }) {
    return (
      <ul>
        {results.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            {/* Highlight matched keywords if applicable */}
            <p>{post.content.substring(0, 100)}...</p>
            <a href={`/posts/${post.slug}`}>Read more</a>
          </li>
        ))}
      </ul>
    );
  }
  
import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [results, setResults] = useState([]);
  const handleSearch = async () => {
    // Fetch search results from API (using fetch or a GraphQL client)
    const response = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ searchTerm }),
    });
    const results = await response.json();
    // Display search results using Results component
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search posts..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

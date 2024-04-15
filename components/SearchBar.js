import React, { useState, useEffect } from 'react';
import styles from '@/styles/Search.module.css'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch('../api/search', {
        method: 'POST',
        body: JSON.stringify({ searchTerm }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      // You could display an error message to the user here
    }
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    } else {
      setResults([]); // Clear results when search term is empty
    }
  }, [searchTerm]);

  // Your logic to display results using Results component

  return (
    <div className={styles.div}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search..."
        
      />
      <button onClick={handleSearch}>Search</button>
      
    </div>
  );
}

export default SearchBar;
import React, { useState } from 'react';
import styles from '@/styles/Search.module.css'

function SearchBar({ term, onChange, onSearch }) {
  const [searchTerm, setSearchTerm] = useState(term || ''); // Pre-fill with initial term (optional)

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onChange && onChange(event.target.value); // Optional onChange prop for internal state management
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSearch(searchTerm); // Call the onSearch prop with the search term
  };

  return (
    
    <div className={styles.div}>
      <h1>
        Search Latest Movies and Series
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search Movies, Series, Animes..."
          className={styles.input}
        />
        <button className={styles.btn} type="submit">Search</button>
    </form>
    </div>
  );
}

export default SearchBar;
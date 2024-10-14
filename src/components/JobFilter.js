import React, { useState } from 'react';

const JobFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    role: '',
    level: '',
    contract: '',
    location: '',
    language: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilter(filters); 
  };

  return (
    <form onSubmit={handleFilterSubmit}>
      <input
        type="text"
        name="role"
        value={filters.role}
        onChange={handleInputChange}
        placeholder="Role (e.g., Frontend)"
      />

      <input
        type="text"
        name="level"
        value={filters.level}
        onChange={handleInputChange}
        placeholder="Level (e.g., Junior)"
      />

      <input
        type="text"
        name="contract"
        value={filters.contract}
        onChange={handleInputChange}
        placeholder="Contract (e.g., Full Time)"
      />

      <input
        type="text"
        name="location"
        value={filters.location}
        onChange={handleInputChange}
        placeholder="Location (e.g., Remote)"
      />

      <input
        type="text"
        name="language"
        value={filters.language}
        onChange={handleInputChange}
        placeholder="Language (e.g., Java)"
      />

      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default JobFilter;



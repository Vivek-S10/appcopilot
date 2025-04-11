import React, { useState } from 'react';

function PropertySearch() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for properties in:', location, 'for', guests, 'guests on', date);
  };

  return (
    <div className="property-search">
      <h2>Search for Properties</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default PropertySearch;
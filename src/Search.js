// Search.js
import React, { useState } from 'react';
import './Search.css'; // Import the CSS file

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated flight data
    const flights = [
      { 
        id: 1, 
        airline: "Airline A", 
        flightNumber: "AA123", 
        departureAirport: "ABC", 
        departure: "08:00 AM", 
        arrivalAirport: "XYZ", 
        arrival: "10:00 AM", 
        duration: "2 hours", 
        price: "$200" 
      },
      { 
        id: 2, 
        airline: "hyderabad", 
        flightNumber: "BB456", 
        departureAirport: "banglore", 
        departure: "10:30 AM", 
        arrivalAirport: "ap", 
        arrival: "12:30 PM", 
        duration: "2 hours", 
        price: "$220" 
      },
      // Add more flight data here
    ];

    // Filter flights based on search query
    const filteredFlights = flights.filter(flight =>
      flight.airline.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update search results state
    setSearchResults(filteredFlights);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search for flights..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="search-results">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map(flight => (
              <li key={flight.id}>
                <div>
                  <span>Airline: {flight.airline}</span>
                  <span>Flight Number: {flight.flightNumber}</span>
                  <span>Departure: {flight.departure}</span>
                  <span>Departure Airport: {flight.departureAirport}</span>
                  <span>Arrival: {flight.arrival}</span>
                  <span>Arrival Airport: {flight.arrivalAirport}</span>
                  <span>Duration: {flight.duration}</span>
                  <span>Price: {flight.price}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;

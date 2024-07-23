import React, { useState, useEffect } from "react";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data when the component mounts
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result); // Log the response for debugging
        setCountries(result);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error); // Log detailed error
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCountries();

    // Cleanup: Function to be called when the component unmounts
    return () => {
      console.log("Cleanup: Component unmounted");
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  if (loading) return <p className="loading">Loading countries...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div>
      <h1>Country List</h1>
      {countries.length > 0 ? (
        <ul>
          {countries.map((country) => (
            <li key={country.cca3}>
              <h2>{country.name?.common || "No name available"}</h2>
              <p>
                <strong>Capital:</strong>{" "}
                {country.capital ? country.capital[0] : "N/A"}
              </p>
              <p>
                <strong>Region:</strong> {country.region || "N/A"}
              </p>
              <p>
                <strong>Population:</strong> {country.population || "N/A"}
              </p>
              <p>
                <strong>Language(s):</strong>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
              <img
                src={country.flags?.png || "https://via.placeholder.com/100"}
                alt={`Flag of ${country.name?.common || "Unknown"}`}
                width="100"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No countries found.</p>
      )}
    </div>
  );
};

export default CountryList;

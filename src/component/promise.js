import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Simulated API request using a Promise
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      
        resolve('Data from API');
      }, 2000); 
    });
  }

  return (
    <div>
      {data ? (
        <p>Data from API: {data}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default MyComponent;

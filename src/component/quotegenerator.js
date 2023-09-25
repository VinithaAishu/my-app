import React, { useState, useEffect } from 'react';


const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

//   useEffect(() => {
//     fetch('https://api.quotable.io/random')
//       .then((response) => response.json())
//       .then((data) => {
//         setQuote(data.content);
//         setAuthor(data.author);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

  const getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <div className="quote-container">
        <p className="quote">{quote}</p>
        <p className="author">- {author}</p>
      </div>
      <button className="button" onClick={getNewQuote}>
        Get New Quote
      </button>
    </div>
  );
};

export default Quote;

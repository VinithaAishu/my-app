import React, { useState, useEffect } from 'react';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create an object to store the data
    const data = {
      input1,
      input2,
    };

    // Store the data in localStorage as a JSON string
    localStorage.setItem('formData',JSON.stringify(data));

    // Clear the input fieldsy
    setInput1('');
    setInput2('');

    alert('Data has been stored in localStorage!');
  };

  // Use useEffect to retrieve data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      // const parsedData = JSON.parse(storedData);
      // setInput1(parsedData.input1);
      // setInput2(parsedData.input2);
      console.log(storedData);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Input 1:
            <input type="text" value={input1} onChange={handleInputChange1} />
          </label>
        </div>
        <div>
          <label>
            Input 2:
            <input type="text" value={input2} onChange={handleInputChange2} />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

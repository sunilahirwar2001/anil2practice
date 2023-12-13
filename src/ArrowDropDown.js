import React, { useEffect, useState } from 'react';

const ArrowDropDown = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const fetchApi = async () =>  {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos');
      let result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
   useEffect(() => {
    fetchApi();

  }, []);
        const handleSelectChange = (event) => {
       const selectedIndex = event.target.selectedIndex;
       const selectedId = data[selectedIndex].id;
       const selectedTitle = data[selectedIndex].title;
       setSelectedOption({ id: selectedId, title: selectedTitle });
  };

  return (
    <div>
      <select>
        {data.map((item, index) => (
          <>
          <option key={index}>{item.title}</option>,
          <option key={index}>{item.userId}</option>,
          </>
        ))}
      </select>
      {selectedOption && (
        <div>
          <p>Selected ID: {selectedOption.id}</p>
          <p>Selected Title: {selectedOption.title}</p>
        </div>
      )  }
    </div>
  );
};

export default ArrowDropDown;

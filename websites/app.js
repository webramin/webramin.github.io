import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const FetchDataFromJSON = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromJSON = async () => {
      try {
        const response = await fetch('data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromJSON();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Fetch Data from JSON</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((item, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src={item.imageUrl} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href={item.url} className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<FetchDataFromJSON />, document.getElementById('root'));

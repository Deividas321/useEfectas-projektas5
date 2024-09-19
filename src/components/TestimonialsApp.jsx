import Button from './Button'; // Importuojame Button komponentą
import { useState, useEffect } from 'react';

function TestimonialsApp() {
  const [testimonials, setTestimonials] = useState(""); // Lowercase 'testimonials'
  const [items, setItems] = useState([]); // Initialize as an empty array

  useEffect(() => {
    if (testimonials) {
      fetch(`https://jsonplaceholder.typicode.com/${testimonials.toLowerCase()}`)
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [testimonials]);

  return (
    <div className="container">
      <h1>Testimonials App</h1>

      <div className="d-flex">
        <Button btnClass={"btn-success"} text={'Posts'} onClick={() => setTestimonials("Posts")} /> 
        <Button btnClass={"btn-info"} text={'Users'} onClick={() => setTestimonials("Users")} /> 
        <Button btnClass={"btn-danger"} text={'Comments'} onClick={() => setTestimonials("Comments")} /> 
      </div>
      
      <h2 className='subtitle text-primary'>
        {!testimonials ? "Select from above" : testimonials}
      </h2>
      
      <div className="items-list">
        {items.length > 0 ? (
          items.map(item => (
            <div className="card card-primary" key={item.id}>
              {item.name && <h2 className='card-title'>{item.name}</h2>}
              {item.title && <h4 className='card-title'>{item.title}</h4>}
              {item.body && <p className='card-body'>{item.body}</p>}
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
}

export default TestimonialsApp;


  
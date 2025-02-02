import React, { useState } from 'react';
import axios from 'axios';
import UrlShortener from './UrlShortener';

const App = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/shorten', { longUrl });
      setShortUrl(`http://localhost:5000/api/${res.data.shortUrl}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='bg-black'>
      <UrlShortener />
    </div>
  );
};

export default App;
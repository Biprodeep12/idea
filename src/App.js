import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import NewsD from './components/NewsD';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false); // New loading state

  return (
    <>
      <Nav setArticles={setArticles} setLoading={setLoading} />
      <div className='main-container'>
        <NewsD articles={articles} loading={loading} />
        <div className='foot'>
          <h1>News-Chor</h1>
          <h3>Made by the Black Community</h3>
        </div>
      </div>
    </>
  );
}

export default App;

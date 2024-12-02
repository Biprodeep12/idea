import React from 'react';

export default function NewsD({ articles, loading }) {
  return (
    <div className='NewsD-cont'>
      <div id='NewsD-cont-display'>
        {loading ? (
          <div className='loading-spinner'></div>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className='article'>
              {article.urlToImage ? (
                <img
                  src={article.urlToImage}
                  alt={article.title || 'News Image'}
                  className='article-image'
                />
              ) : (
                <div className='placeholder-image'>No Image</div>
              )}
              <h2>{article.title || 'No Title Available'}</h2>
              <p>
                <strong>Author:</strong> {article.author || 'Unknown'}
              </p>
              <a href={article.url} target='_blank' rel='noopener noreferrer'>
                Read More
              </a>
            </div>
          ))
        ) : (
          <p className='No-Art'>Try Searching Articles</p>
        )}
      </div>
    </div>
  );
}

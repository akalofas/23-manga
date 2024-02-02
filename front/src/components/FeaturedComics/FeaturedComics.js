import React from 'react';
import dummyData from '../data/dummyData';
import './FeaturedComics.css';

function FeaturedComics() {
  return (
    <div className="featured-comics">
      {dummyData.map(comic => (
        <div key={comic.id} className="comic-card">
          <img src={comic.cover} alt={comic.title} />
          <div className="comic-info">
            <h3>{comic.title}</h3>
            <p>Latest: {comic.latestChapter}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedComics;

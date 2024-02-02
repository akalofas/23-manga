import React from 'react';
import { comics } from '../data/dummyData'; // Adjust the path as necessary
import './LatestUpdates.css';

function LatestUpdates() {
  // Use the imported comics data directly in your component
  return (
    <div className="latest-updates">
      <h2>Latest Updates</h2>
      <div className="comics-list">
        {comics.map(comic => (
          <div key={comic.id} className="comic-card">
            <img src={comic.cover} alt={comic.title} />
            <div className="comic-info">
              <h3>{comic.title}</h3>
              <p>Released: {comic.releaseDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestUpdates;

import './formation.css';
// Formation.js
import React from 'react';

function Formation({ img, name, date, description, link }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{date}</p>
      <div className="description">
        <h2>{description}</h2>
        <div className="button">
            <a href={link} target='BLANK'>More Infos</a>
        </div>
      </div>
    </div>
  );
}

export default Formation;
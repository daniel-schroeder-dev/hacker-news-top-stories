import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <li className="card">
      <div className="card__item-number"><span className="card__item-number__number">1</span></div>
      <a className="card__article-title-link" href="#">Article title</a> <span className="card__article-title-by">by</span> <span className="card__article-title-author">author</span>
    </li>
  );
}

export default Card;
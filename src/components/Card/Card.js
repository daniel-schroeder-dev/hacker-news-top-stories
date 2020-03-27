import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

function Card(props) {
  return (
    <li className="card">
      <div className="card__item-number"><span className="card__item-number__number">{props.number}</span></div>
      <a className="card__article-title-link" href={props.url}>{props.title}</a> <span className="card__article-title-by">by</span> <span className="card__article-title-author">{props.by}</span>
    </li>
  );
}

Card.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
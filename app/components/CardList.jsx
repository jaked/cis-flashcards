import React from 'react'
import { Link } from 'react-router-dom'

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
const CardList = function({ cards }) {
  return (
    <ul>
      {cards.map(function(card, i) {
        return <li><Link to={"card/" + i}>{i}</Link></li>;
      })}
    </ul>
  );
}

module.exports = CardList;
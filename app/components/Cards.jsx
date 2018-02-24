import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'reactstrap'
import CardList from './CardList'

/* the main page for the index route of this app */
const Cards = function({ cards }) {
  return (
    <div>
      <Jumbotron>
        <h1>Cards</h1>

        <Link to='/about'>Learn about this app!</Link>
      </Jumbotron>

      <CardList cards={cards} />
    </div>
  );
}

module.exports = Cards;
import React from 'react'
import { arrayOf, string, shape, number } from 'prop-types'

import './deck.css'

const Deck = ({ deck }) =>
  deck.length && <div className="deck">{deck[0].age}</div>

Deck.propTypes = {
  deck: arrayOf(
    shape({
      age: number,
      name: string,
      dogma: string,
      tokens: arrayOf(string),
    }),
  ),
}
export default Deck

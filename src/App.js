import React, { Component } from 'react'
import './App.css'
import PlayArea from './components/PlayArea/index'
import Deck from './components/Deck'

class App extends Component {
  state = {
    ages: {
      age1: [
        {
          age: 1,
          symbols: ['crown', 'crown', 'crown'],
          name: 'pottery',
          dogma: 'take money',
        },
      ],
      age2: [
        {
          age: 2,
          symbols: ['castle', 'castle', 'castle'],
          name: 'the wheel',
          dogma: 'take 2 cards',
        },
      ],
    },
  }
  render() {
    const { ages } = this.state
    return (
      <PlayArea>
        {Object.keys(ages).map(deck => (
          <Deck key={`${deck}`} deck={ages[deck]} />
        ))}
      </PlayArea>
    )
  }
}

export default App

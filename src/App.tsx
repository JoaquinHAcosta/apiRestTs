import React from 'react'
import './App.css'
import { DATA } from './data/characters'
import { CharacterList } from './components/CharacterList'
import { type Char } from './types'
import { Form } from './components/Form'

function App() {
  
  const [characters, setCharacters] = React.useState<Char[]>([])
  const [newCharacter, setNewCharacter] = React.useState<Char>()

  const divRef = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    setCharacters(DATA)
  }, [])

  const handleNewSub = (newCharacter: Char): void => {
    setCharacters(characters => [...characters, newCharacter])
  }

  return (
    <>
      <div className='App' ref={divRef}>
        <CharacterList
          characters={characters}
        />
        <Form onNewChar={handleNewSub}/>
      </div>
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import { DATA } from './data/characters'
import { CharacterList } from './components/CharacterList'
import { type Char, type Characters } from './types'

function App() {
  
  const [characters, setCharacters] = React.useState<Characters['characters']>([])
  const [ newCharacter, setNewCharacter ] = React.useState<Char>({
    nick: '',
    avatar: '',
    gearScore: 0,
    role: ''
  })

  React.useEffect(() => {
    setCharacters(DATA)
  }, [])

  return (
    <>
      <div className='App'>
        <CharacterList
          characters={characters}
        />
      </div>
    </>
  )
}

export default App

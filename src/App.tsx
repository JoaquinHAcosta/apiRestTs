import React from 'react'
import './App.css'
import { DATA } from './data/characters'
import { CharacterList } from './components/CharacterList'
import { type Char, type Characters } from './types'
import { Form } from './components/Form'

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
        <Form></Form>
      </div>
    </>
  )
}

export default App

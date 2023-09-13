import React from 'react'
import { type Char } from '../types'
import { useNewCharacterForm } from '../hooks/useNewCharacterForm'

interface FormProps {
    onNewChar: (newCharacter: Char) => void
}

export const Form = ({ onNewChar }: FormProps) => {

    const [ inputValues, dispatch ] = useNewCharacterForm()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        dispatch({
            type: 'CHANGE_VALUE',
            payload: {
                inputName: name,
                inputValue: value
            }
        })
        
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewChar(inputValues)
        dispatch({
            type: 'CLEAR'
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form-create">
            <input 
                type="text"
                name="nick"
                placeholder="Nick"
                value={inputValues.nick}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="role"
                placeholder="Rol"
                value={inputValues.role}
                onChange={handleChange}
            />
            <input 
                type="number"
                name="gearScore"
                placeholder="gearScore"
                value={inputValues.gearScore}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="avatar"
                placeholder="Avatar"
                value={inputValues.avatar}
                onChange={handleChange}
            />
            <input type="submit" value="Submit new character" />
        </form>
    )
}
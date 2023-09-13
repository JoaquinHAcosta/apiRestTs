import React from 'react'
import { type Char } from '../types'

interface FormProps {
    onNewChar: (newCharacter: Char) => void
}

export const Form = ({ onNewChar }: FormProps) => {

    const [ inputValues, setInputValues ] = React.useState<Char>({
        nick: "",
        role: "",
        gearScore: 0,
        avatar: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewChar(inputValues)
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
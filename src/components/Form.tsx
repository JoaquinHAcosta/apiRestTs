import React from 'react'
import { Char } from '../types'

export const Form = () => {

    const [ inputValues, setInputValues ] = React.useState<Char>({
        nick: "",
        role: "",
        gearScore: 0,
        avatar: ""
    })

    const handleChange = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name] : event.targe.value
        })
    }

    const handleSubmit = () => {

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
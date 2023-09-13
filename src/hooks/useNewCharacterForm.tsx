import { useReducer } from "react"
import { Char  } from "../types"

const INITIAL_STATE = {
    nick: "",
    role: "",
    gearScore: 0,
    avatar: ""
}

export type FormReducerAction = {
    type: 'CHANGE_VALUE',
    payload: {
        inputName: string
        inputValue: string
    }
} | {
    type: 'CLEAR'
}

export const formReducer = (state: Char, action: FormReducerAction) => {
    switch (action.type) {
        case 'CHANGE_VALUE': {
            const { inputName, inputValue } = action.payload
            return {
                ...state,
                [inputName] : inputValue
            }
        }
        case 'CLEAR':
            return INITIAL_STATE
        default:
            return { ...state }
    }
}

export const useNewCharacterForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

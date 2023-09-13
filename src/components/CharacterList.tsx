import { type Characters } from "../types"

export const CharacterList: React.FC<Characters> = ( { characters }: Characters ) => {
    return (
        <div>
            <h1>Characters: </h1>
            <ul className="lista-chars">
                {
                    characters.map(({ nick, gearScore, avatar, role }) => {
                        return (
                            <li key={nick}>
                                <p>{nick}</p>
                                <h3>{gearScore} GS</h3>
                                <img src={avatar} alt={role} style={ {width: '100px', height: 'auto'}}/>
                                <p>Rol: {role}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
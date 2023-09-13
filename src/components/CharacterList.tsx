import { type Characters } from "../types"

export const CharacterList: React.FC<Characters> = ( { characters }: Characters ) => {
    return (
        <div>
        <h1>Characters: </h1>
        {
            characters.map(({ nick, gearScore, avatar, role }) => {
                return (
                    <div key={nick}>
                        <h1>{nick}</h1>
                        <h3>{gearScore} GS</h3>
                        <img src={avatar} alt={role} style={ {width: '100px', height: 'auto'}}/>
                        <p>Rol: {role}</p>
                    </div>
                )
            }
            )
        }
        </div>
    )
}
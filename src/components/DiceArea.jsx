import Dice from './Dice'
import './DiceArea.css'

function Dicearea({ faces, isHolds, handleHold, isInit }) {
    if (isInit) {
        return <div className='dice'>ROLL!</div>
    }
    return (
        <div className='dice'>
            <Dice face={faces[0]} isHold={isHolds[0]} handleClick={() => handleHold(0)} />
            <Dice face={faces[1]} isHold={isHolds[1]} handleClick={() => handleHold(1)} />
            <Dice face={faces[2]} isHold={isHolds[2]} handleClick={() => handleHold(2)} />
            <Dice face={faces[3]} isHold={isHolds[3]} handleClick={() => handleHold(3)} />
            <Dice face={faces[4]} isHold={isHolds[4]} handleClick={() => handleHold(4)} />
        </div>
    )
}

export default Dicearea
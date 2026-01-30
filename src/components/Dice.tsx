import './Dice.css'
import dice1 from "/public/dice1.png";
import dice2 from "/public/dice2.png";
import dice3 from "/public/dice3.png";
import dice4 from "/public/dice4.png";
import dice5 from "/public/dice5.png";
import dice6 from "/public/dice6.png";

const FACES = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
];

type Props = {
    face: number;
    isHold: boolean;
    handleClick: () => void
}

function Dice(props: Props) {
    const { face, isHold, handleClick } = props;
    const src = FACES[face];
    return (
        <div className={`die ${isHold ? "held" : ""}`}
            onClick={handleClick}>
            <img src={src}
                alt="dice"
                style={{
                    width: "50px",
                    height: "50px",
                    margin: "0.5rem",
                }} />
        </div>
    )
}

export default Dice
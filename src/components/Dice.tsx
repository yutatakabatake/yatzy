import './Dice.css'

const FACES = [
    "src/assets/dice1.png",
    "src/assets/dice2.png",
    "src/assets/dice3.png",
    "src/assets/dice4.png",
    "src/assets/dice5.png",
    "src/assets/dice6.png"
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
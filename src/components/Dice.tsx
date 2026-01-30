import './Dice.css'

const FACES = [
    "public/dice1.png",
    "public/dice2.png",
    "public/dice3.png",
    "public/dice4.png",
    "public/dice5.png",
    "public/dice6.png"
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
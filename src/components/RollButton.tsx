type Props = {
    count: number;
    handleRoll: () => void
}

function RollButton(props: Props) {
    const { count, handleRoll } = props;
    return (
        <button onClick={handleRoll}
            disabled={count === 0}>
            Roll {count}
        </button>
    )
}

export default RollButton
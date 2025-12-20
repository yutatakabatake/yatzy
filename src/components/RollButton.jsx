function RollButton({ count, handleRoll }) {
    return (
        <button onClick={handleRoll}
            disabled={count === 0}>
            Roll {count}
        </button>
    )
}

export default RollButton
function RollButton({ count, handleRoll }) {
    return (
        <button onClick={handleRoll}>Roll {count}</button>
    )
}

export default RollButton
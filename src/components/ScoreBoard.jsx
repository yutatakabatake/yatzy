import UpperScoreBoard from "./ScoreBoardPart";

function ScoreBoard({ upperScores, lowerScores, upperPossibleScores, lowerPossibleScores, handleSelect }) {
    const sum = upperScores.map(row => row.score === null ? 0 : row.score)
        .reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );
    const bonus = (sum >= 63) ? 35 : 0;
    const total = lowerScores.map(row => row.score === null ? 0 : row.score)
        .reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        ) + sum + bonus;

    return (
        <table border="1" width="100%" style={{ marginTop: "1rem" }}>
            <tbody>
                <UpperScoreBoard scores={upperScores} possibleScores={upperPossibleScores} handleSelect={handleSelect} />
                <tr key="sum">
                    <td></td>
                    <td>Sum</td>
                    <td>{sum}</td>
                </tr>
                <tr key="bonus">
                    <td></td>
                    <td>Bonus</td>
                    <td>{bonus}</td>
                </tr>
                <UpperScoreBoard scores={lowerScores} possibleScores={lowerPossibleScores} handleSelect={handleSelect} />
                <tr key="total">
                    <td></td>
                    <td>Total</td>
                    <td>{total}</td>
                </tr>
            </tbody>
        </table >
    );
}

export default ScoreBoard;

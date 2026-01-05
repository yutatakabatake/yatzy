import ScoreBoardPart from "./ScoreBoardPart";

function ScoreBoard({ scores, possibleScores, handleSelect, isActive }) {
    const upperScores = scores.slice(0, 6);
    const lowerScores = scores.slice(6);
    const upperPossibleScores = possibleScores.slice(0, 6);
    const lowerPossibleScores = possibleScores.slice(6);
    const sum = upperScores.map(row => row.score === null ? 0 : row.score)
        .reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );
    const bonus = (sum >= 63) ? 35 : 0;
    const bonusDescription = (sum >= 63) ? "Get!" : `${sum}/63`;
    const total = lowerScores.map(row => row.score === null ? 0 : row.score)
        .reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        ) + sum + bonus;

    return (
        <table border="1" width="100%" style={{ marginTop: "1rem" }}>
            <tbody>
                <ScoreBoardPart scores={upperScores} possibleScores={upperPossibleScores} handleSelect={handleSelect} isActive={isActive} />
                <tr key="sum">
                    <td></td>
                    <td>Sum</td>
                    <td>{sum}</td>
                </tr>
                <tr key="bonus">
                    <td>{bonusDescription}</td>
                    <td>Bonus</td>
                    <td>{bonus}</td>
                </tr>
                <ScoreBoardPart scores={lowerScores} possibleScores={lowerPossibleScores} handleSelect={handleSelect} isActive={isActive} />
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

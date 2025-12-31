import UpperScoreBoard from "./ScoreBoardPart";

function ScoreBoard({ upperScores, lowerScores, upperPossibleScores, lowerPossibleScores }) {
    return (
        <table border="1" width="100%" style={{ marginTop: "1rem" }}>
            <tbody>
                <UpperScoreBoard scores={upperScores} possibleScores={upperPossibleScores} />
                <tr key="sum">
                    <td></td>
                    <td>Sum</td>
                    <td>0</td>
                </tr>
                <tr key="bonus">
                    <td></td>
                    <td>Bonus</td>
                    <td>0</td>
                </tr>
                <UpperScoreBoard scores={lowerScores} possibleScores={lowerPossibleScores} />
                <tr key="total">
                    <td></td>
                    <td>Total</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ScoreBoard;

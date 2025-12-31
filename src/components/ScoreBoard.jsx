import LowerBoardScore from "./LowerBoardScore";
import UpperScoreBoard from "./UpperScoreBoard";

function ScoreBoard({ upperScores, lowerScores, upperPossibleScores, lowerPossibleScores }) {
    return (
        <table border="1" width="100%" style={{ marginTop: "1rem" }}>
            <tbody>
                <UpperScoreBoard upperScores={upperScores} upperPossibleScores={upperPossibleScores} />
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
                <LowerBoardScore lowerScores={lowerScores} lowerPossibleScores={lowerPossibleScores} />
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

import LowerBoardScore from "./LowerBoardScore";
import UpperScoreBoard from "./UpperScoreBoard";

function ScoreBoard() {
    return (
        <table border="1" width="100%" style={{ marginTop: "1rem" }}>
            <tbody>
                <UpperScoreBoard />
                <tr key="sum">
                    <td>Sum</td>
                    <td>0</td>
                </tr>
                <tr key="bonus">
                    <td>Bonus</td>
                    <td>0</td>
                </tr>
                <LowerBoardScore />
                <tr key="total">
                    <td>Total</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ScoreBoard;

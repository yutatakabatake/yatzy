function LowerBoardScore({ lowerScores, lowerPossibleScores }) {
    const item = lowerScores.map((row, i) => {
        let score;
        if (row.score) {
            score = row.score;
        } else {
            score = lowerPossibleScores[i].score;
        };

        return (<tr key={row.key}>
            <td>
                <button type="button">Select</button>
            </td>
            <td>{row.key}</td>
            <td>{score}</td>
        </tr>);
    });
    return item;
}

export default LowerBoardScore
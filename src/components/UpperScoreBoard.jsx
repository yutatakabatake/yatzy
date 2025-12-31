function UpperScoreBoard({ upperScores, upperPossibleScores }) {
    const item = upperScores.map((row, i) => {
        const isDecide = row.score !== null;
        let score;
        if (isDecide) {
            score = row.score;
        } else {
            score = upperPossibleScores[i].score;
        };

        return (<tr key={row.key}>
            <td>
                <button type="button">Select</button>
            </td>
            <td>{row.key}</td>
            <td
                style={{
                    color: isDecide ? "black" : "#999"
                }}>
                {score}
            </td>
        </tr>);
    });
    return item;
}

export default UpperScoreBoard
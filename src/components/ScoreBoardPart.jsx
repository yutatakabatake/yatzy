function UpperScoreBoard({ scores, possibleScores, handleSelect }) {
    const item = scores.map((row, i) => {
        const isDecide = row.score !== null;
        let score;
        if (isDecide) {
            score = row.score;
        } else {
            score = possibleScores[i].score;
        };

        return (
            <tr key={row.key}>
                <td>
                    <button type="button" onClick={() => handleSelect(row.key)}>Select</button>
                </td>
                <td>{row.key}</td>
                <td
                    style={{
                        color: isDecide ? "white" : "#999"
                    }}>
                    {score}
                </td>
            </tr>
        );
    });
    return item;
}

export default UpperScoreBoard
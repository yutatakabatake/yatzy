function UpperScoreBoard() {
    const rows = [
        { key: "ones", label: "Ones" },
        { key: "twos", label: "Twos" },
        { key: "threes", label: "Threes" },
        { key: "fours", label: "Fours" },
        { key: "fives", label: "Fives" },
        { key: "sixes", label: "Sixes" }];

    return (
        <>
            {rows.map(row => (
                <tr key={row.key}>
                    <td>{row.label}</td>
                    <td>0</td>
                    <td>
                        <button type="button">Select</button>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default UpperScoreBoard
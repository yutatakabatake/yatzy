function LowerBoardScore() {
    const rows = [
        { key: "three", label: "Three of a kind" },
        { key: "four", label: "Four of a kind" },
        { key: "fullHouse", label: "Full house" },
        { key: "smallStraight", label: "Small straight" },
        { key: "largeStraight", label: "Large straight" },
        { key: "chance", label: "Chance" },
        { key: "yatzy", label: "Yatzy" }

    ];
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

export default LowerBoardScore
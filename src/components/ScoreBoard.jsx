function ScoreBoard() {
    const rows = [
        { key: "ones", label: "Ones" },
        { key: "twos", label: "Twos" },
        { key: "threes", label: "Threes" },
        { key: "fours", label: "Fours" },
        { key: "fives", label: "Fives" },
        { key: "sixes", label: "Sixes" },

        { key: "sum", label: "Sum" },
        { key: "bonus", label: "Bonus" },

        { key: "three", label: "Three of a kind" },
        { key: "four", label: "Four of a kind" },
        { key: "fullHouse", label: "Full house" },
        { key: "smallStraight", label: "Small straight" },
        { key: "largeStraight", label: "Large straight" },
        { key: "chance", label: "Chance" },
        { key: "yatzy", label: "Yatzy" },

        { key: "total", label: "Total" },
    ];

    return (
        <table border="1" width="100%" style={{ marginTop: "1rem" }}>
            <tbody>
                {rows.map(row => (
                    <tr key={row.key}>
                        <td>{row.label}</td>
                        <td>0</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ScoreBoard;

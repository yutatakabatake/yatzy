import type { Faces, PossibleScoreRow, ScoreKey } from "../Game";

type Counts = {
    one: number,
    two: number,
    three: number,
    four: number,
    five: number,
    six: number
}

const keys: ScoreKey[] = [
    "Ones",
    "Twos",
    "Threes",
    "Fours",
    "Fives",
    "Sixes",
    "Three",
    "Four",
    "HullHouse",
    "SmallStraight",
    "LargeStraight",
    "Chance",
    "Yatzy"
];

const faceMap: Record<number, keyof Counts> = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six'
};

function countDice(faces: Faces): Counts {
    const counts: Counts = {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    };
    for (const value of faces) {
        const key = faceMap[value + 1];
        if (key) {
            counts[key] = counts[key] + 1
        }
    }
    return counts;
}

function calcOnesScore(counts: Counts) {
    if (counts['one']) {
        return counts['one'];
    }
    return 0;
}

function calcTwosScore(counts: Counts) {
    if (counts['two']) {
        return counts['two'] * 2;
    }
    return 0;
}

function calcThreesScore(counts: Counts) {
    if (counts['three']) {
        return counts['three'] * 3;
    }
    return 0;
}

function calcFoursScore(counts: Counts) {
    if (counts['four']) {
        return counts['four'] * 4;
    }
    return 0;
}

function calcFivesScore(counts: Counts) {
    if (counts['five']) {
        return counts['five'] * 5;
    }
    return 0;
}

function calcSixesScore(counts: Counts) {
    if (counts['six']) {
        return counts['six'] * 6;
    }
    return 0;
}

function calcThreeOfKindScore(counts: Counts, faces: Faces) {
    const hasThreeOrMore = Object.values(counts).some(
        count => count >= 3
    );
    if (hasThreeOrMore) {
        return calcChanceScore(faces);
    } else {
        return 0;
    }
}

function calcFourOfKindScore(counts: Counts, faces: Faces) {
    const hasFourOrMore = Object.values(counts).some(
        count => count >= 4
    );
    if (hasFourOrMore) {
        return calcChanceScore(faces);
    } else {
        return 0;
    }
}

function calcFullhouseScore(counts: Counts) {
    const [a, b] = Object.values(counts).sort();
    if (a === 2 && b === 3) {
        return 25;
    }
    return 0;
}

function calcSmallStraightScore(counts: Counts) {
    let maxRun = 0
    let currentRun = 0

    for (let value = 0; value <= 5; value++) {
        const key = faceMap[value];
        if (counts[key] >= 1) {
            currentRun++
            maxRun = Math.max(maxRun, currentRun)
        } else {
            currentRun = 0
        }
    }
    if (maxRun >= 4) {
        return 30
    }
    return 0;
}

function calcLargeStraightScore(counts: Counts) {
    let maxRun = 0
    let currentRun = 0

    for (let value = 0; value <= 5; value++) {
        const key = faceMap[value + 1];
        if (counts[key] >= 1) {
            currentRun++
            maxRun = Math.max(maxRun, currentRun)
        } else {
            currentRun = 0
        }
    }
    if (maxRun === 5) {
        return 40;
    }
    return 0;
}

function calcChanceScore(faces: Faces) {
    const sum = faces.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    return sum + 5;
}

function calcYatzy(counts: Counts) {
    const isYazty = Object.values(counts).some(count => count === 5);
    if (isYazty) {
        return 50;
    }
    return 0;
}

export function calcScores(faces: Faces): PossibleScoreRow[] {
    const counts = countDice(faces);
    const scores = [
        { key: keys[0], score: calcOnesScore(counts) },
        { key: keys[1], score: calcTwosScore(counts) },
        { key: keys[2], score: calcThreesScore(counts) },
        { key: keys[3], score: calcFoursScore(counts) },
        { key: keys[4], score: calcFivesScore(counts) },
        { key: keys[5], score: calcSixesScore(counts) },
        { key: keys[6], score: calcThreeOfKindScore(counts, faces) },
        { key: keys[7], score: calcFourOfKindScore(counts, faces) },
        { key: keys[8], score: calcFullhouseScore(counts) },
        { key: keys[9], score: calcSmallStraightScore(counts) },
        { key: keys[10], score: calcLargeStraightScore(counts) },
        { key: keys[11], score: calcChanceScore(faces) },
        { key: keys[12], score: calcYatzy(counts) }
    ];
    return scores;
}
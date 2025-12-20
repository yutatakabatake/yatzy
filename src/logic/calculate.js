function countDice(faces) {
    const counts = {}
    for (const value of faces) {
        counts[value] = (counts[value] || 0) + 1
    }
    return counts;
}

function calcOnesScore(counts) {
    if (counts[0]) {
        return counts[0];
    }
    return 0;
}

function calcSecondsScore(counts) {
    if (counts[1]) {
        return counts[1] * 2;
    }
    return 0;
}

function calcThirdsScore(counts) {
    if (counts[2]) {
        return counts[2] * 3;
    }
    return 0;
}

function calcSFoursScore(counts) {
    if (counts[3]) {
        return counts[3] * 4;
    }
    return 0;
}

function calcFivesScore(counts) {
    if (counts[4]) {
        return counts[4] * 5;
    }
    return 0;
}

function calcSixesScore(counts) {
    if (counts[5]) {
        return counts[5] * 6;
    }
    return 0;
}

function calcThreeOfKindScore(counts, faces) {
    const hasThreeOrMore = Object.values(counts).some(
        count => count >= 3
    );
    if (hasThreeOrMore) {
        return calcChanceScore(faces);
    } else {
        return 0;
    }
}

function calcFourOfKindScore(counts, faces) {
    const hasFourOrMore = Object.values(counts).some(
        count => count >= 4
    );
    if (hasFourOrMore) {
        return calcChanceScore(faces);
    } else {
        return 0;
    }
}

function calcFullhouseScore(counts) {
    const [a, b] = Object.values(counts).sort();
    if (a === 2 && b === 3) {
        return 25;
    }
    return 0;
}

function calcSmallStraightScore(counts) {
    let maxRun = 0
    let currentRun = 0

    for (let value = 0; value <= 5; value++) {
        if (counts[value] >= 1) {
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

function calcLargeStraightScore(counts) {
    let maxRun = 0
    let currentRun = 0

    for (let value = 0; value <= 5; value++) {
        if (counts[value] >= 1) {
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

function calcChanceScore(faces) {
    const sum = faces.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    return sum + 5;
}

function calcYatzy(counts) {
    const isYazty = Object.values(counts).some(count => count === 5);
    if (isYazty) {
        return 50;
    }
    return 0;
}

const faces = [3, 3, 3, 3, 3];
const counts = countDice(faces);
const onesScore = calcYatzy(counts);
console.log(counts);
console.log(onesScore);
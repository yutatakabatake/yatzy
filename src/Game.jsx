import { useState } from 'react'
import './Game.css'
import RollButton from './components/RollButton'
import Dicearea from './components/Dicearea'
import ScoreBoard from './components/ScoreBoard'
import { calcScores } from './logic/calculate'

function Game({ players }) {
  const [isHolds, setIsHolds] = useState(Array(5).fill(false));
  const [faces, setFaces] = useState(Array(5).fill(0));
  const [count, setCount] = useState(3);
  const [scores, setScores] = useState(createInitialScores(players));
  const [possibleScores, setPossibleScores] = useState([
    { key: "Ones", score: 0 },
    { key: "Twos", score: 0 },
    { key: "Threes", score: 0 },
    { key: "Fours", score: 0 },
    { key: "Fives", score: 0 },
    { key: "Sixes", score: 0 },
    { key: "Three", score: 0 },
    { key: "Four", score: 0 },
    { key: "HullHouse", score: 0 },
    { key: "SmallStraight", score: 0 },
    { key: "LargeStraight", score: 0 },
    { key: "Chance", score: 0 },
    { key: "Yatzy", score: 0 },
  ]);

  function handleHold(i) {
    const newIsHolds = [...isHolds.slice(0, i), !isHolds[i], ...isHolds.slice(i + 1, isHolds.length)];
    setIsHolds(newIsHolds);
  }

  function handleRoll() {
    if (count === 0) {
      return;
    }
    const newFaces = faces.map((n, i) => {
      if (isHolds[i]) {
        return n
      }
      const randNum = Math.random() * 6;
      const intNum = Math.floor(randNum);
      return intNum;
    });
    setFaces(newFaces);
    setCount(count - 1);

    const newPossibleScores = calcScores(newFaces);
    setPossibleScores(newPossibleScores);
  }

  function handleSelect(key) {
    const newScores = scores.map((row, i) => (
      row.key === key ? { ...row, score: possibleScores[i].score } : row
    ));
    setScores(newScores);
    initRound();
  }

  function initRound() {
    setIsHolds(Array(5).fill(false));
    setFaces(Array(5).fill(0));
    setCount(3);
    setPossibleScores([
      { key: "Ones", score: 0 },
      { key: "Twos", score: 0 },
      { key: "Threes", score: 0 },
      { key: "Fours", score: 0 },
      { key: "Fives", score: 0 },
      { key: "Sixes", score: 0 },
      { key: "Three", score: 0 },
      { key: "Four", score: 0 },
      { key: "HullHouse", score: 0 },
      { key: "SmallStraight", score: 0 },
      { key: "LargeStraight", score: 0 },
      { key: "Chance", score: 0 },
      { key: "Yatzy", score: 0 }
    ]);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Yatzy</h1>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "2rem",
        }}>
        <div>
          <Dicearea faces={faces} isHolds={isHolds} handleHold={handleHold} isInit={count === 3} />
          <RollButton count={count} handleRoll={handleRoll} />
        </div>
        {scores.map((playerScores, index) => (
          <ScoreBoard
            key={index}
            upperScores={playerScores.slice(0, 6)}
            lowerScores={playerScores.slice(6)}
            upperPossibleScores={possibleScores.slice(0, 6)}
            lowerPossibleScores={possibleScores.slice(6)}
            handleSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  )
}

function createInitialScores(players) {
  return (Array(players).fill([
    { key: "Ones", score: null },
    { key: "Twos", score: null },
    { key: "Threes", score: null },
    { key: "Fours", score: null },
    { key: "Fives", score: null },
    { key: "Sixes", score: null },
    { key: "Three", score: null },
    { key: "Four", score: null },
    { key: "HullHouse", score: null },
    { key: "SmallStraight", score: null },
    { key: "LargeStraight", score: null },
    { key: "Chance", score: null },
    { key: "Yatzy", score: null }
  ]));
}

function createInitialPossibleScores(players) {
  return (Array(players).fill([
    { key: "Ones", score: 0 },
    { key: "Twos", score: 0 },
    { key: "Threes", score: 0 },
    { key: "Fours", score: 0 },
    { key: "Fives", score: 0 },
    { key: "Sixes", score: 0 },
    { key: "Three", score: 0 },
    { key: "Four", score: 0 },
    { key: "HullHouse", score: 0 },
    { key: "SmallStraight", score: 0 },
    { key: "LargeStraight", score: 0 },
    { key: "Chance", score: 0 },
    { key: "Yatzy", score: 0 }
  ]));
}

export default Game

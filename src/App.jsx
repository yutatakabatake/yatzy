import { useState } from 'react'
import './App.css'
import RollButton from './components/RollButton'
import Dicearea from './components/Dicearea'
import ScoreBoard from './components/ScoreBoard'
import { calcLowerScores, calcUpperScores } from './logic/calculate'

function App() {
  const [isHolds, setIsHolds] = useState(Array(5).fill(false));
  const [faces, setFaces] = useState(Array(5).fill(0));
  const [count, setCount] = useState(3);
  const [upperScores, setUpperScores] = useState([
    { key: "Ones", score: null },
    { key: "Twos", score: null },
    { key: "Threes", score: null },
    { key: "Fours", score: null },
    { key: "Fives", score: null },
    { key: "Sixes", score: null },
  ]);
  const [lowerScores, setLowerScores] = useState([
    { key: "Three", score: null },
    { key: "Four", score: null },
    { key: "HullHouse", score: null },
    { key: "SmallStraight", score: null },
    { key: "LargeStraight", score: null },
    { key: "Chance", score: null },
    { key: "Yatzy", score: null },
  ]);
  const [upperPossibleScores, setUpperPossibleScores] = useState([
    { key: "Ones", score: 0 },
    { key: "Twos", score: 0 },
    { key: "Threes", score: 0 },
    { key: "Fours", score: 0 },
    { key: "Fives", score: 0 },
    { key: "Sixes", score: 0 },
  ]);
  const [lowerPossibleScores, setLowerPossibleScores] = useState([
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

    const newUpperPossibleScores = calcUpperScores(newFaces);
    setUpperPossibleScores(newUpperPossibleScores);

    const newLowerPossibleScores = calcLowerScores(newFaces);
    setLowerPossibleScores(newLowerPossibleScores);
  }

  function handleSelect(key) {
    if (key === "Ones" ||
      key === "Twos" ||
      key === "Threes" ||
      key === "Fours" ||
      key === "Fives" ||
      key === "Sixes"
    ) {
      const newUpperScores = upperScores.map((row, i) => (
        row.key === key ? { ...row, score: upperPossibleScores[i].score } : row
      ));
      setUpperScores(newUpperScores);
    } else {
      const newLowerScores = lowerScores.map((row, i) => (
        row.key === key ? { ...row, score: lowerPossibleScores[i].score } : row
      ));
      setUpperScores(newLowerScores);
    }
    initRound();
  }

  function initRound() {
    setIsHolds(Array(5).fill(false));
    setFaces(Array(5).fill(0));
    setCount(3);
    setUpperPossibleScores([
      { key: "Ones", score: 0 },
      { key: "Twos", score: 0 },
      { key: "Threes", score: 0 },
      { key: "Fours", score: 0 },
      { key: "Fives", score: 0 },
      { key: "Sixes", score: 0 },
    ]);
    setLowerPossibleScores([
      { key: "Three", score: 0 },
      { key: "Four", score: 0 },
      { key: "HullHouse", score: 0 },
      { key: "SmallStraight", score: 0 },
      { key: "LargeStraight", score: 0 },
      { key: "Chance", score: 0 },
      { key: "Yatzy", score: 0 },
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
          <Dicearea faces={faces} isHolds={isHolds} handleHold={handleHold} />
          <RollButton count={count} handleRoll={handleRoll} />
        </div>
        <ScoreBoard upperScores={upperScores}
          lowerScores={lowerScores}
          upperPossibleScores={upperPossibleScores}
          lowerPossibleScores={lowerPossibleScores}
          handleSelect={handleSelect} />
      </div>
    </div>

  )
}

export default App

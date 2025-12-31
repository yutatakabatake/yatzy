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
  const [upperScores, setUpperScores] = useState({
    ones: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null
  });
  const [lowerScores, setLowerScores] = useState({
    three: null,
    four: null,
    fullHouse: null,
    smallStraight: null,
    largeStraight: null,
    chance: null,
    yatzy: null
  });
  const [upperPossibleScores, setUpperPossibleScores] = useState({
    ones: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null
  });
  const [lowerPossibleScores, setLowerPossibleScores] = useState({
    three: null,
    four: null,
    fullHouse: null,
    smallStraight: null,
    largeStraight: null,
    chance: null,
    yatzy: null
  });

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
    console.log(newUpperPossibleScores);

    const newLowerPossibleScores = calcLowerScores(newFaces);
    console.log(newLowerPossibleScores);
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
        <ScoreBoard />
      </div>
    </div>

  )
}

export default App

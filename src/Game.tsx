import { useState } from 'react'
import './Game.css'
import RollButton from './components/RollButton'
import Dicearea from './components/Dicearea'
import ScoreBoard from './components/ScoreBoard'
import { calcScores } from './logic/calculate'

export type ScoreKey =
  | "Ones"
  | "Twos"
  | "Threes"
  | "Fours"
  | "Fives"
  | "Sixes"
  | "Three"
  | "Four"
  | "HullHouse"
  | "SmallStraight"
  | "LargeStraight"
  | "Chance"
  | "Yatzy";

export type Faces = number[];

type ScoreRow = {
  key: ScoreKey;
  score: number | null;
};


export type PossibleScoreRow = {
  key: ScoreKey;
  score: number;
};

type Props = { players: number }

function Game(props: Props) {
  const { players } = props;
  const [isHolds, setIsHolds] = useState<boolean[]>(Array(5).fill(false));
  const [faces, setFaces] = useState<Faces>(Array(5).fill(0));
  const [count, setCount] = useState<number>(3);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [scores, setScores] = useState<ScoreRow[][]>(createInitialScores(players));
  const [possibleScores, setPossibleScores] = useState<PossibleScoreRow[][]>(createInitialPossibleScores(players));

  function handleHold(i: number) {
    const newIsHolds = [...isHolds.slice(0, i), !isHolds[i], ...isHolds.slice(i + 1, isHolds.length)];
    setIsHolds(newIsHolds);
  }

  function handleRoll() {
    if (count === 0) {
      return;
    }
    const newFaces = faces.map((n, i) => {
      if (isHolds[i]) {
        return n;
      }
      const randNum = Math.random() * 6;
      const intNum = Math.floor(randNum);
      return intNum;
    });
    setFaces(newFaces);
    setCount(count - 1);

    const newPossibleScores = calcScores(newFaces);
    setPossibleScores(
      possibleScores.map((possiblePlayerScores: PossibleScoreRow[], index: number) => (
        index === currentPlayer ? newPossibleScores : possiblePlayerScores
      ))
    );
  }

  function handleSelect(key: ScoreKey) {
    const newScores = scores[currentPlayer].map((row: ScoreRow, i: number) => (
      row.key === key ? { ...row, score: possibleScores[currentPlayer][i].score } : row
    ));
    setScores(
      scores.map((playerScores, index) => (
        index === currentPlayer ? newScores : playerScores
      ))
    );
    initRound();
  }

  function initRound() {
    setIsHolds(Array(5).fill(false));
    setFaces(Array(5).fill(0));
    setCount(3);
    setPossibleScores(createInitialPossibleScores(players));
    setCurrentPlayer(currentPlayer === players - 1 ? 0 : currentPlayer + 1);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>YATZY</h1>
      <h2>Player {currentPlayer + 1}'s turn</h2>

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
            scores={playerScores}
            possibleScores={possibleScores[index]}
            handleSelect={handleSelect}
            isActive={index === currentPlayer}
            playerNumber={index}
          />
        ))}
      </div>
    </div>
  )
}

function createInitialScores(players: number): ScoreRow[][] {
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

function createInitialPossibleScores(players: number): PossibleScoreRow[][] {
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

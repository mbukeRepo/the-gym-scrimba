import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Die from "../components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { allNewDice, updateDice } from "./utils";

const App = () => {
  const [dice, setDice] = useState(() => allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((item) => item.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((item) => item.value === firstValue);
    if (allSameValue && allHeld) {
      setTenzies(true);
    }
  }, [dice]);

  const rollDice = useCallback(() => {
    if (!tenzies) {
      setDice((oldDice) => updateDice(oldDice));
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }, []);

  const holdDice = useCallback((id) => {
    setDice((oldDice) =>
      oldDice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }, []);

  const dieElements = dice.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      holdDice={() => holdDice(item.id)}
      isHeld={item.isHeld}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{dieElements}</div>
      <button onClick={rollDice} className="roll-dice">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
};

export default App;

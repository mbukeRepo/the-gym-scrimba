import React, { useCallback, useEffect } from "react";
import "./App.css";
import Die from "../components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const App = () => {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  useEffect(() => {
    const allHeld = dice.every((item) => item.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((item) => item.value === firstValue);
    if (allSameValue && allHeld) {
      setTenzies(true);
    }
  }, [dice]);

  const generateNewDie = useCallback(
    () => ({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    }),
    []
  );

  const allNewDice = useCallback(() => {
    const dieArray = [];
    for (let i = 0; i < 10; i++) {
      dieArray.push(generateNewDie());
    }
    return dieArray;
  }, []);

  const rollDice = useCallback(() => {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((item) => {
          return item.isHeld ? item : generateNewDie();
        })
      );
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

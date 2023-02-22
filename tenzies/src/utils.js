const generateNewDie = () => ({
  value: Math.floor(Math.random() * 6) + 1,
  isHeld: false,
  id: nanoid(),
});

export const allNewDice = () => {
  const dieArray = [];
  for (let i = 0; i < 10; i++) {
    dieArray.push(generateNewDie());
  }
  return dieArray;
};

export const updateDice = (oldDice) => {
  return oldDice.map((item) => {
    return item.isHeld ? item : generateNewDie();
  });
};

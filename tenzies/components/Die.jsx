import { memo } from "react";
const Die = ({ isHeld, holdDice, value }) => {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "#FFFFFF",
  };

  return (
    <div onClick={holdDice} style={styles} className="die-face">
      <h2 className="die-num">{value}</h2>
    </div>
  );
};

export default memo(Die);

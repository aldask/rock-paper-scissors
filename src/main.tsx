import React from "react";
import { useLogic } from "./logic";

const MainPage: React.FC = () => {
  const { handleChoice, handleWhoWon, userText } = useLogic();

  return (
    <>
      <div className="mainContainer loaded">
        <h1 className="mainText">ROCK PAPER SCISSORS</h1>
        <div className="infoBox">
          <p>Welcome to Rock Paper Scissors Mini-Game!</p>
          <p>You will be playing against computer</p>
          <p>Press the button below to start</p>
        </div>
        <div className="buttonsBox">
          <button onClick={handleChoice}>Select</button>
          <p>
            Your selection: <span>{userText}</span>
          </p>
        </div>
        <button onClick={handleWhoWon}>Play!</button>
      </div>
    </>
  );
};

export default MainPage;
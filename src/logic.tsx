import React, { useState, useEffect } from "react";

enum Choice {
  Rock,
  Paper,
  Scissors,
}

export const useLogic = () => {
  // USER SELECTION
  const [userSelection, setUserSelection] = useState(Choice.Rock);
  const [userText, setUserText] = useState("Rock");

  useEffect(() => {
    switch (userSelection) {
      case Choice.Rock:
        setUserText("Rock");
        break;
      case Choice.Paper:
        setUserText("Paper");
        break;
      case Choice.Scissors:
        setUserText("Scissors");
        break;
      default:
        setUserText("Rock");
    }
  }, [userSelection]);

  function handleChoice() {
    setUserSelection((prevSelection) => {
      const newSelection = prevSelection + 1;
      return newSelection > 2 ? 0 : newSelection;
    });
  }
  // USER SELECTION END

  // GENERATED SELECTION START

  const [generatedSelection, setGeneratedSelection] = useState(Choice.Rock);
  const [generatedText, setGeneratedText] = useState("Rock");

  //Random num generator

  function randomNum() {
    const generatedNum = Math.floor(Math.random() * 3);
    setGeneratedSelection(generatedNum);
    return generatedNum;
  }

  useEffect(() => {
    switch (generatedSelection) {
      case Choice.Rock:
        setGeneratedText("Rock");
        break;
      case Choice.Paper:
        setGeneratedText("Paper");
        break;
      case Choice.Scissors:
        setGeneratedText("Scissors");
        break;
      default:
        setGeneratedText("Rock");
    }
  }, [generatedSelection]);

  // GENERATED SELECTION END

  // WHO WON START

  function handleWhoWon() {
    randomNum();
    switch (true) {
      case userSelection === generatedSelection:
        alert(`It's a tie! ${userText} - ${generatedText}`);
        break;
      case (userSelection === 2 && generatedSelection === 1) ||
        (userSelection === 1 && generatedSelection === 0) ||
        (userSelection === 0 && generatedSelection === 2):
        alert(
          `YOU WON! You chose ${userText} and the computer chose ${generatedText}`
        );
        break;
      default:
        alert(
          `YOU LOST! You chose ${userText} and the computer chose ${generatedText}`
        );
    }
  }
  //Who won END

  return {
    handleChoice,
    handleWhoWon,
    userText,
  };
};
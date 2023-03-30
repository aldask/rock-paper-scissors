import React, { useState, useEffect } from 'react';

enum Choice {
    Rock,
    Paper,
    Scissors
}

const Buttons: React.FC = () => {
    // USER SELECTION
    const [userSelection, setUserSelection] = useState(Choice.Rock);
    const [userText, setUserText] = useState('Rock');
    
    useEffect(() => {
        switch (userSelection) {
          case Choice.Rock:
            setUserText('Rock');
            break;
          case Choice.Paper:
            setUserText('Paper');
            break;
          case Choice.Scissors:
            setUserText('Scissors');
            break;
          default:
            setUserText('Rock');
        }
      }, [userSelection]);
    
    function handleChoice() {
        setUserSelection(userSelection + 1);

        if (userSelection > 1) {
            setUserSelection(0);
        }
    }
    // USER SELECTION END

    // GENERATED SELECTION START

    const [generatedSelection, setGeneratedSelection] = useState(Choice.Rock);
    const [generatedText, setGeneratedText] = useState('Rock');

    //Random num generator

    function randomNum () {
        const generatedNum = Math.floor(Math.random() * 3);
        setGeneratedSelection(generatedNum);
        return generatedNum;
    }

    useEffect(() => {
        switch (generatedSelection) {
          case Choice.Rock:
            setGeneratedText('Rock');
            break;
          case Choice.Paper:
            setGeneratedText('Paper');
            break;
          case Choice.Scissors:
            setGeneratedText('Scissors');
            break;
          default:
            setGeneratedText('Rock');
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
            alert(`You win! You chose ${userText} and the computer chose ${generatedText}`);
            break;
          default:
            alert(`You lose! You chose ${userText} and the computer chose ${generatedText}`);
        }
      }

    
    return (
        <>
        <div className='mainContainer'>
            <h1 className='main'>ROCK PAPER SCISSORS</h1>
            <div className='infoBox'>
                <p>You will be playing against computer</p>
                <p>Press the button bellow to start</p>
            </div>
            <div className='buttonsBox'>
                <button onClick={handleChoice}>Select</button>
                <p>Your selection: <span>{userText}</span></p>
            </div>
            <button onClick={handleWhoWon}>Play!</button>
        </div>
        </>
        );
    };

export default Buttons;
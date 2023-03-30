import React, { useState, useEffect } from 'react';

const Buttons: React.FC = () => {

    // USER SELECTION
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    
    useEffect(() => {
        if (count === 2) {
            setText('Scissors');
        } else if (count === 1) {
            setText('Paper');
        } else {
            setText('Rock');
        }
    }, [count]);
    
    function handleChoice() {
        setCount(count + 1);
        
        if (count > 1) {
            setCount(0);
        }
    }
    // USER SELECTION END

    // GENERATED SELECTION START

    const [randomCount, setRandomCount] = useState(0);
    const [randomText, setRandomText] = useState('');

    function randomNum () {
        const generatedNum = Math.floor(Math.random() * 3);
        setRandomCount(generatedNum);
        return generatedNum;
    }

    useEffect(() => {
        if (randomCount === 2) {
            setRandomText('Scissors');
        } else if (randomCount === 1) {
            setRandomText('Paper');
        } else {
            setRandomText('Rock');
        }
    }, [randomCount]);

    // GENERATED SELECTION END

    // WHO WON START

    function handleWhoWon () {
        let generatedNum = randomNum();
        if (randomCount === generatedNum) {
            alert (`It's a tie!`);
        } else if ((randomCount === 0 && generatedNum === 2) || 
                   (randomCount === 1 && generatedNum === 0) || 
                   (randomCount === 2 && generatedNum === 1)) {
            alert (`You win! You chose ${randomText} and the computer chose `);
        } else {
            alert (`You lose! You chose ${randomText} and the computer chose `);
        }
    }



    
    return (
    <div>
        <button onClick={handleChoice}>Your choice</button>
        <p>User choice</p>
        <p>{text}</p>
        <p>Generated choice</p>
        <p>{randomText}</p>
        <p>Who won:</p>
        <button onClick={handleWhoWon}>aaa</button>
        </div>
        );
    };

export default Buttons;
import React, { useState, useEffect } from 'react';

const Buttons: React.FC = () => {
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

    const [randomCount, setRandomCount] = useState(0);
    const [randomText, setRandomText] = useState('');

    function randomNum () {
        return setRandomCount(Math.floor(Math.random() * 3));
    }

    useEffect(() => {
        if (randomCount === 2) {
            setRandomText('Scissors');
        } else if (randomCount === 1) {
            setRandomText('Paper');
        } else {
            setRandomText('Rock');
        }
    });


    
    return (
    <div>
        <button onClick={handleChoice}>Buttonas</button>
        <p>User choice</p>
        <p>{text}</p>
        <p>Generated choice</p>
        <p>{randomText}</p>
        </div>
        );
    };

export default Buttons;
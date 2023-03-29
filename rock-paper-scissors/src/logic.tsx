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
    
    return (
    <div>
        <button onClick={handleChoice}>Buttonas</button>
        <p><span>{text}</span></p>
        </div>
        );
    };

export default Buttons;
import React from 'react';
import './Button.css';

let numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];


let newNumbers = numbers.map((text) => {
    return <button className="Math" key={text}>{text}</button>
})

console.log(newNumbers);

function NumberButton() {
    return (
        <div className = "Number_Container">
            {newNumbers}
        </div>
    )
}

export default NumberButton;
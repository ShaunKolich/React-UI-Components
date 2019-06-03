import React from 'react';
import '../../less/Button.css';

function MathButtons() {
    return (
        <div className ="Math_buttons">
            <button className="Math"><i className="fas fa-divide"></i></button>
            <button className="Math"><i className="fas fa-times"></i></button>
            <button className="Math"><i className="fas fa-minus"></i></button>
            <button className="Math"><i className="fas fa-plus"></i></button>
            <button className="Math"><i className="fas fa-equals"></i></button>
        </div>
    )

}

export default MathButtons;
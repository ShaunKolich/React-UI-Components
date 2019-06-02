import React from 'react';
import '../../less/Button.css';

function MathButtons() {
    return (
        <div className ="Math_buttons">
            <button className="Math"><i class="fas fa-divide"></i></button>
            <button className="Math"><i class="fas fa-times"></i></button>
            <button className="Math"><i class="fas fa-minus"></i></button>
            <button className="Math"><i class="fas fa-plus"></i></button>
            <button className="Math"><i class="fas fa-equals"></i></button>
        </div>
    )

}

export default MathButtons;
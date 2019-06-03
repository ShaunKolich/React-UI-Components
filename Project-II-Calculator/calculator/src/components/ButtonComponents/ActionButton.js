import React from 'react';
import '../../less/Button.css';


function ActionButton(props) {
        
    return (
        <div>
          
          <button className={`Action_Button ${props.className}`}>
            {props.text}
        </button>
           
        </div>
        
    )
}

export default ActionButton;


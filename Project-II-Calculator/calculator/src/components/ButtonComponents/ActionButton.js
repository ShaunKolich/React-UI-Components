import React from 'react';
import '../../less/Button.css';

let actionItem = [
    { name: "clear"
    },
    {
      name:"0"  
    }
];


function ActionButton(props) {
    return (
        <button className="Action_Button">
         <p>clear</p>  
        </button>

    )
}
export default ActionButton;
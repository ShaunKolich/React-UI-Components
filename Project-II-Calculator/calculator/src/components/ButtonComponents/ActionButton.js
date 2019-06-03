import React from 'react';
import '../../less/Button.css';


const info = ["clear","0"]
       

let newInfo = info.map((test, i) => {
    return <button className="Action_Button" key={i}>{test}</button>
})
console.log(newInfo);

function ActionButton(info) {
        
    return (
        <div>
         {newInfo}              
        </div>
        
    )
}

export default ActionButton;


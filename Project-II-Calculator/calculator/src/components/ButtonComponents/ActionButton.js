import React from 'react';
import '../../less/Button.css';


const info = ["clear", "0"]; 
    
let newInfo = info.map((text,i) => {
    return <button className="Action_Button" key={i}>{text}</button>
})
console.log(newInfo);

function ActionButton() {
      return (
        <div>
              {newInfo}    
               
        </div>
        
    )
}
export default ActionButton;
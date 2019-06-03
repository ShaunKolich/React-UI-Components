import React from 'react';
import '../../less/Display.css';

import OutPutContainer from './CalculatorHeader';
import ActionButton from '../ButtonComponents/ActionButton'
import MathButtons from '../ButtonComponents/MathButtons'
import NumberButton from '../ButtonComponents/NumberButton'

function CalculatorDisplay() {
    return (
        <div className='Main_Container'>
            <div className="Calculator_Container">
                <OutPutContainer />
                <div className="Action_Math_Container">
                    <div className="ActionButtonContainer">
                    <ActionButton className="Action_Button" text ="clear"/> 
                    </div>
                    <div className="Math_Container">
                    <MathButtons/>
                    </div>
                </div>
                <div className="NumberButtonContainer">
                    <NumberButton/>
                </div>
                <div className="ActionButtonZero">
                <ActionButton className="Action_Button" text ="0"/>  
                </div>
                
                
        </div>


        </div >
    )
}

export default CalculatorDisplay;
import React from 'react'

export const Display = ({textToDisplay, isOff, isPrank}) => {

let newClassName = "result";

newClassName = isOff ? newClassName + " off" : newClassName;

newClassName = isPrank ? newClassName + " prank" : newClassName;

    return (
        
     <div id="result" className={newClassName}>
     {textToDisplay || "0.00"}
     </div>

        
    )
}

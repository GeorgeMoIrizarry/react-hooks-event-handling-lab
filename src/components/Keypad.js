import React from "react";

function Keypad (){
    function onChangeFunc(){
        console.log('Entering password...')
    }
    
    return (
        <div>
            <input type="password" onChange={onChangeFunc} />
        </div>
    )
}

export default Keypad;
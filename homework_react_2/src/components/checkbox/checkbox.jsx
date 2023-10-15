import React from "react";
import "./checkbox.css"

import lightmode from "../../img/lightmode.png"
import darkmode from "../../img/darkmode.png"

function Checkbox(){
    return(
        <>
        <input  className="checkbox" type="checkbox" id="darkmode-toggle" />
        <label for="darkmode-toggle">
        <img src={lightmode} className="sun" alt="sun"></img>
        <img src={darkmode} className="moon" alt="moon"></img>
        </label>   
        </>
    )
}
export default Checkbox

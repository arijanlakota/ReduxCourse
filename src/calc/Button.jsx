import { useState } from "react"
import '../App.css'

function CalcBut({butNumber,finalStr,onClick}){
    const [numBut,setNum] = useState(butNumber) 

    return (
        <button className="zabut" onClick={() => onClick(finalStr + numBut)}>
        {numBut}
        </button>
    )
}
export default CalcBut
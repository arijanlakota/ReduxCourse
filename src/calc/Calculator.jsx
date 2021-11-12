import { useState } from "react"
import CalcBut from "./Button"
function Calculator(props){
    const [calString,setCalString] = useState("")
    const charArr = ["7","8","9","/","4","5","6","x","1","2","3","-","0",".","+","="]
    return(
        <div className="calcDiv">
            <div className="inputDiv">
                {calString}
            </div>
            <div className="buttonsDiv">
                {charArr.map((value) => { 
                    if(value === "="){
                        return <CalcBut butNumber={value} onClick={eval(calString)} finalStr={calString}/>
                    }
                    return <CalcBut butNumber={value} onClick={setCalString} finalStr={calString}/>
                    
                })}
            </div>
        </div>
    )

}
export default Calculator
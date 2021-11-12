import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ageChange,firstChange,lastChange} from "../reducers/inputRed"
export function  Inputer() {
    const dispatch = useDispatch()
    const firtsName = useSelector((state) => state.inputer.firtsName)
    const lastName = useSelector((state) => state.inputer.lastName)
    const age = useSelector((state) => state.inputer.age)
    function zaIme(e) {
        dispatch(firstChange(firtsName,e.target.value))
        console.log(firtsName)
    }
    function zaPrezime(e) {
        dispatch(lastChange(lastName,e.target.value))
        console.log(lastChange)
    }
    function  zaGodine(e) {
        dispatch(ageChange(age,e.target.value))
        console.log(age)
    }
    return(
        <div>
            <input value={firtsName} type="text" onChange={zaIme} />
            <input value={lastName} type="text" onChange={zaPrezime}/>
            <input value={age} type="number" onChange={zaGodine}/>
        </div>
    )
    
}
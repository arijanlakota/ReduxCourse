import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ageChange,firstChange,lastChange} from "../reducers/inputRed"
export default function  Inputer() {
    const dispatch = useDispatch()
    const firtsName = useSelector((state) => state.inputer.firtsName)
    const lastName = useSelector((state) => state.inputer.lastName)
    const age = useSelector((state) => state.inputer.age)
    function zaIme(e) {
        dispatch(firstChange(e.target.value))
        console.log(firtsName)
    }
    function zaPrezime(e) {
        dispatch(lastChange(e.target.value))
        console.log(lastChange)
    }
    function  zaGodine(e) {
        dispatch(ageChange(e.target.value))
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
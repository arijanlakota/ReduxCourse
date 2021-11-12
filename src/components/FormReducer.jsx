import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  firstChange, lastChange, ageChange } from '../reducers/formReduce'
export function FormReducer()  {
    const firtsName = useSelector((state) => state.formReduce.firtsName)
    const lastName = useSelector((state) => state.formReduce.lastName)
    const age = useSelector((state) => state.formReducer.age)
    const dispatch = useDispatch()
    return(
        <div>
            <input value={firtsName} type="text" onChange={(e) => {dispatch(firstChange(e.target.value))}} />
            <input value={lastName} type="text" onChange={dispatch(lastChange())}/>
            <input value={age} type="number" onChange={dispatch(ageChange())}/>
        </div>
    )
}

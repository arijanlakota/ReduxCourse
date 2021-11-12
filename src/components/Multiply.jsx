import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  devision, multiply } from '../reducers/counterMultiplayer'
export function Multiply() {
    const count = useSelector((state) => state.multiply.value)
    const dispatch = useDispatch()
  
    return (
      <div>
        <div>
          <button
            aria-label="Multiply value"
            onClick={() => dispatch(multiply())}
          >
            Multiply
          </button>
          <span>{count}</span>
          <button
            aria-label="Devision value"
            onClick={() => dispatch(devision())}
          >
            Devision
          </button>
        </div>
      </div>
    )
  }
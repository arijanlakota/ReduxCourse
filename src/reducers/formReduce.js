import { createSlice } from '@reduxjs/toolkit'

export const formReducer =  createSlice({
  name: 'formReducer',
  initialState: {
    firstName:"",
    lastName:"",
    age:0
  },
  reducers: {
    firstChange: (state,newState) => {
      state.firstName = newState
    },
    lastChange: (state,newState) => {
      state.lastName = newState
    },
    ageChange: (state,newState) => {
        state.age = newState
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
// Action creators are generated for each case reducer function
export const { firstChange, lastChange, ageChange,incrementByAmount } = formReducer.actions

export default formReducer.reducer

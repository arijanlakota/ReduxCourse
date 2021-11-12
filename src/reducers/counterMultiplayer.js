import { createSlice } from '@reduxjs/toolkit'

export const counterMult = createSlice({
  name: 'multiplayer',
  initialState: {
    value: 1,
  },
  reducers: {
    multiply: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value *= 2
    },
    devision: (state) => {
      state.value /= 2
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { multiply, devision, incrementByAmount } = counterMult.actions

export default counterMult.reducer
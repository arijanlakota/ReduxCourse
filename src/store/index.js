import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterSlice'
import counterMultiplayer from '../reducers/counterMultiplayer'
import inputRed from '../reducers/inputRed'

export default configureStore({
  reducer: {
      counter : counterReducer,
      multiplayer : counterMultiplayer,
      inputer: inputRed
      
  },
})
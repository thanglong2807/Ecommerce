import { configureStore } from '@reduxjs/toolkit'
import counterReducer from ''
import globalStore from './globalStore'

export const store = configureStore(globalStore)
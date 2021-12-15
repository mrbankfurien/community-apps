import { createStore } from "redux"
import changePart from "./partReducers"

export default createStore(changePart)
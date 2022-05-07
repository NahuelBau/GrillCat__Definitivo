import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from "redux";
import thunk from "redux-thunk";
import { createReducer } from "../reducer/createReducer";
import {
   equiposReducer
} from "../reducer/equipoReducer";
import {
  uiReducer
} from "../reducer/uiReducer";
import {
  authReducer
} from './../reducer/authReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  equipos: equiposReducer,
  create: createReducer,
  
})


export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )



)
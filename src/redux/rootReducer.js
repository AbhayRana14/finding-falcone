import { combineReducers } from "redux";
import falconeReducer from "./falcone/reducer";
import falconePersistReducer from "./falcone/persistReducer";

const rootReducer = combineReducers({
  falconeReducer,
  falconePersistReducer,
});

export default rootReducer;

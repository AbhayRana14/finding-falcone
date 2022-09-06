import { all, fork } from "redux-saga/effects";
import falconeSaga from "./falcone/saga";

function* rootSaga() {
  yield all([fork(falconeSaga)]);
}

export default rootSaga;

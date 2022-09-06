import { all, put, throttle } from "redux-saga/effects";
import {
  findPlanetsFailure,
  findPlanetsSuccess,
  findQueenFailure,
  findQueenSuccess,
  getTokenFailure,
  getTokenSuccess,
  getVehiclesFailure,
  getVehiclesSuccess,
} from "./reducer";
import { httpGet, httpPost } from "../../utils/https";
import URLS from "../../utils/urls";
import { toasts } from "../../components/common/Toast/Toast";
import { STATUS_CODE } from "../../utils/constants";
import {} from "./persistReducer";
import { getAccessToken } from "../../utils/helper";

//GET TOKEN
function* getTokenSaga({ payload }) {
  try {
    const response = yield httpPost(`${URLS.APP.FALCONE.GET_TOKEN}`, {});
    if (response?.status === STATUS_CODE?.successful) {
      toasts.success(response?.data?.message);
      yield put(payload?.callback(response));
      yield put(getTokenSuccess());
    } else if (
      response?.data?.status ===
      (STATUS_CODE?.unAuthorized || STATUS_CODE.forbidden)
    ) {
      toasts.error(response?.data?.message);
    } else {
      yield put(getTokenFailure());
      toasts.error(response?.data?.message);
    }
  } catch (error) {
    yield put(findQueenFailure());
    toasts.error(error?.response?.statusText);
  }
}

function* findPlanetsSaga({ payload }) {
  try {
    const response = yield httpPost(
      `${URLS.APP.FALCONE.GET_PLANETS}`,
      getAccessToken(),
      {}
    );
    if (response?.status === STATUS_CODE?.successful) {
      toasts.success(response?.data?.message);
      yield put(payload?.callback(response));
      yield put(findPlanetsSuccess());
    } else if (
      response?.data?.status ===
      (STATUS_CODE?.unAuthorized || STATUS_CODE.forbidden)
    ) {
      toasts.error(response?.data?.message);
    } else {
      yield put(findPlanetsFailure());
      toasts.error(response?.data?.message);
    }
  } catch (error) {
    yield put(findPlanetsFailure());
    toasts.error(error?.response?.statusText);
  }
}

// FIND QUEEN
function* findQueenSaga({ payload }) {
  try {
    const response = yield httpPost(
      `${URLS.APP.FALCONE.FIND_QUEEN}`,
      getAccessToken(),
      {}
    );
    if (response?.status === STATUS_CODE?.successful) {
      toasts.success(response?.data?.message);
      yield put(payload?.callback(response));
      yield put(findQueenSuccess());
    } else if (
      response?.data?.status ===
      (STATUS_CODE?.unAuthorized || STATUS_CODE.forbidden)
    ) {
      toasts.error(response?.data?.message);
    } else {
      yield put(findQueenFailure());
      toasts.error(response?.data?.message);
    }
  } catch (error) {
    yield put(findQueenFailure());
    toasts.error(error?.response?.statusText);
  }
}

// GET VEHICLES
function* getVehiclesSaga({ payload }) {
  try {
    const response = yield httpGet(
      `${URLS.APP.FALCONE.GET_VEHICLES}`,
      getAccessToken()
    );
    if (response?.status === STATUS_CODE?.successful) {
      payload?.callback(response);
      toasts.success(response?.data?.message);
      yield put(getVehiclesSuccess());
    } else if (
      response?.data?.status ===
      (STATUS_CODE?.unAuthorized || STATUS_CODE.forbidden)
    ) {
      toasts.error(response?.data?.message);
    } else {
      yield put(getVehiclesFailure());
      toasts.error(response?.data?.message);
    }
  } catch (error) {
    yield put(getVehiclesFailure());
    toasts.error(error?.response?.statusText);
  }
}

function* falconeSaga() {
  yield all([throttle(1000, "falconeReducer/getTokenFetch", getTokenSaga)]);
  yield all([
    throttle(1000, "falconeReducer/findPlanetsFetch", findPlanetsSaga),
  ]);
  yield all([throttle(1000, "falconeReducer/findQueenFetch", findQueenSaga)]);
  yield all([
    throttle(1000, "falconeReducer/getVehiclesFetch", getVehiclesSaga),
  ]);
}
export default falconeSaga;

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
import { STATUS_CODE, TOAST_MESSAGE } from "../../utils/constants";
import {
  savePlanetDetails,
  saveVehicleDetails,
  setTokenAvailability,
} from "./persistReducer";

//GET TOKEN
function* getTokenSaga() {
  try {
    const response = yield httpPost(`${URLS.APP.FALCONE.GET_TOKEN}`, {}, {});
    if (response?.status === STATUS_CODE?.successful) {
      toasts.success(TOAST_MESSAGE.TOKEN_GENERATED);
      yield put(setTokenAvailability(response?.data?.token));
      yield put(getTokenSuccess());
    } else if (
      response?.status === (STATUS_CODE?.unAuthorized || STATUS_CODE.forbidden)
    ) {
      toasts.error(TOAST_MESSAGE.UN_AUTH);
    } else {
      yield put(getTokenFailure());
      toasts.error(TOAST_MESSAGE.ERROR);
    }
  } catch (error) {
    yield put(findQueenFailure());
    toasts.error(error?.response?.statusText);
  }
}

function* findPlanetsSaga({ payload }) {
  try {
    const response = yield httpGet(`${URLS.APP.FALCONE.GET_PLANETS}`, {}, {});
    if (response?.status === STATUS_CODE?.successful) {
      if (!payload?.dontShow) {
        toasts.success(TOAST_MESSAGE.PLANET_SUCCESS);
      }
      yield put(savePlanetDetails(response?.data));
      yield put(findPlanetsSuccess());
    } else if (
      response?.data?.status ===
      (STATUS_CODE?.unAuthorized || STATUS_CODE.forbidden)
    ) {
      toasts.error(TOAST_MESSAGE.UN_AUTH);
    } else {
      yield put(findPlanetsFailure());
      toasts.error(TOAST_MESSAGE.ERROR);
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
      {},
      payload?.data
    );
    if (response?.status === STATUS_CODE?.successful) {
      toasts.success(TOAST_MESSAGE.SUCCESS);
      payload?.callback(response);
      yield put(findQueenSuccess());
    } else if (
      response?.data?.status ===
      (STATUS_CODE?.unAuthorized || STATUS_CODE.forbidden)
    ) {
      toasts.error(TOAST_MESSAGE.ERROR);
    } else {
      yield put(findQueenFailure());
      toasts.error(TOAST_MESSAGE.ERROR);
    }
  } catch (error) {
    yield put(findQueenFailure());
    toasts.error(error?.response?.statusText);
  }
}

// GET VEHICLES
function* getVehiclesSaga({ payload }) {
  try {
    const response = yield httpGet(`${URLS.APP.FALCONE.GET_VEHICLES}`, {}, {});
    if (response?.status === STATUS_CODE?.successful) {
      if (!payload?.dontShow) {
        toasts.success(TOAST_MESSAGE.VEHIVLE_SUCCESS);
      }
      yield put(saveVehicleDetails(response?.data));
      yield put(getVehiclesSuccess());
    } else if (
      response?.data?.status ===
      (STATUS_CODE?.unAuthorized || STATUS_CODE.forbidden)
    ) {
      toasts.error(TOAST_MESSAGE.UN_AUTH);
    } else {
      yield put(getVehiclesFailure());
      toasts.error(TOAST_MESSAGE.ERROR);
    }
  } catch (error) {
    yield put(getVehiclesFailure());
    toasts.error(error?.response?.statusText);
  }
}

// EXIT GAME
function* exitGameSaga() {
  try {
    yield put(localStorage.clear());
  } catch (error) {
    toasts.error(TOAST_MESSAGE.ERROR);
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
  yield all([throttle(1000, "falconeReducer/exitGame", exitGameSaga)]);
}
export default falconeSaga;

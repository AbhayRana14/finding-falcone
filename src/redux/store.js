import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["falconePersistReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [sagaMiddleware];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

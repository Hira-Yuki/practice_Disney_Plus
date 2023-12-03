import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

export const rootReducer = combineReducers({
  user: userReducer,
});

// config 작성
const persistConfig = {
  key: "root", // localStorage key 
  storage, // localStorage
  // whitelist: [], // target (reducer name) 해당 리듀서만 localStorage에 저장
  // blacklist: [], // [] 항목 제외하고 localStorage에 저장
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  // 직렬화 불가능한 액션을 전달하는 것은 일반적인 Redux에서는 불가능하여 에러가 발생함
  // 직렬화가 불가능한 경우 데이터의 불변성에 문제가 발생함
  // persist의 경우에만 예외적으로 직렬화 가능 여부를 검사하지 않도록 설정
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

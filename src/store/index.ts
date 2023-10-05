import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

//slice
import { OrderingSystemSlice } from "./features/orderingSyatemSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  orederSystem: OrderingSystemSlice.reducer,
});
const persistConfigReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistConfigReducer,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//slice
import { OrderingSystemSlice } from "./features/orderingSyatemSlice";

export const store = configureStore({
  reducer: {
    orederSystem: OrderingSystemSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

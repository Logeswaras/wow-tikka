import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//models
import { AddCardModel } from "./models";

interface IOrderingSyatem {
  cart: AddCardModel[];
}

const initialState: IOrderingSyatem = {
  cart: [],
};

export const OrderingSystemSlice = createSlice({
  name: "orderingSyatemSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddCardModel>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cart.push(action.payload);
      }
    },
    quantityIncrement: (state, action: PayloadAction<AddCardModel>) => {
      const itemToUpdate = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemToUpdate) {
        itemToUpdate.quantity++;
        itemToUpdate.price += 7.49;
      }
    },
    quantityDecrement: (state, action: PayloadAction<AddCardModel>) => {
      const itemToUpdate = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemToUpdate) {
        itemToUpdate.quantity--;
        itemToUpdate.price -= 7.49;
        if (itemToUpdate.quantity === 0) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export default OrderingSystemSlice.reducer;
export const { addToCart, quantityIncrement, quantityDecrement } =
  OrderingSystemSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//models
import { AddCardModel, MenuDescriptionModel } from "./models";

interface IOrderingSyatem {
  cart: AddCardModel[];
  menuDescription: MenuDescriptionModel;
}

const initialState: IOrderingSyatem = {
  cart: [],
  menuDescription: new MenuDescriptionModel(),
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
    handleCardDescription: (state, action: PayloadAction<AddCardModel>) => {
      state.menuDescription = action.payload;
    },
  },
});

export const {
  addToCart,
  quantityIncrement,
  quantityDecrement,
  handleCardDescription,
} = OrderingSystemSlice.actions;

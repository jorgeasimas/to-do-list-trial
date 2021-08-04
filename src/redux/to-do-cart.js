import { createStore } from "redux";

const INITIAL_STATE = {
  cartItems: []
};

const ActionTypes = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  TOGGLE_STATUS: "TOGGLE_STATUS",
  EDIT_ITEM: "EDIT_ITEM"
};

export const addItems = (item) => ({
  type: ActionTypes.ADD_ITEM,
  payload: item
});

export const removeItems = (item) => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: item
});

export const toggleStatus = (item) => ({
  type: ActionTypes.TOGGLE_STATUS,
  payload: item
});

export const editItem = (item) => ({
  type: ActionTypes.EDIT_ITEM,
  payload: item
});

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        //       cartItems: [...state.cartItems, action.payload]

        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            status: "pending" + " " + String.fromCodePoint(parseInt(2716, 16))
          }
        ]
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItems) => cartItems.task !== action.payload.task
        )
      };
    case ActionTypes.TOGGLE_STATUS:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItems) =>
          cartItems.task === action.payload.task
            ? {
                ...cartItems,
                status:
                  "completed " + " " + String.fromCodePoint(parseInt(2714, 16))
              }
            : cartItems
        )
      };
    case ActionTypes.EDIT_ITEM:
      console.log(action.payload.task);
      console.log(action.payload.id);
      return {
        ...state,
        cartItems: state.cartItems.map((cartItems) =>
          cartItems.id === action.payload.id
            ? {
                ...cartItems,
                task: action.payload.task
              }
            : cartItems
        )
      };
    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;
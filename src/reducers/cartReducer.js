const initialState = {
    cartItems: [],
  };
  
  const ADD_TO_CART = 'ADD_TO_CART';
  const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
  const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY';
  const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY';
  
  export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
  
  // Action to increment the quantity of a cart item
  export const incrementCartItemQuantity = (productId) => ({
    type: INCREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  });
  
  // Action to decrement the quantity of a cart item
  export const decrementCartItemQuantity = (productId) => ({
    type: DECREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  });
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const existingCartItem = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
  
        if (existingCartItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };
        }
  
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        };
  
      case INCREMENT_CART_ITEM_QUANTITY:
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
  
      case DECREMENT_CART_ITEM_QUANTITY:
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
  
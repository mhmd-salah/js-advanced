// state management
const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const DEPOSITE_MONEY = "DEPOSITE_MONEY";

const ADD_PRODCUT = "ADD_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";

const withDraw = ( amount ) => {
  return {
    type: WITHDRAW_MONEY,
    payload: amount
  };
};
const deposite = ( amount ) => {
  return {
    type: DEPOSITE_MONEY,
    payload: amount
  };
};
const addProducts = ( amount ) => {
  return {
    type: ADD_PRODCUT,
    payload: amount
  };
};
const getProducts = ( products ) => {
  return {
    type: GET_PRODUCTS,
    payload: products
  };
};
const fetchProducts = () => {
  return async ( dispatch ) => {
    const res = await fetch( 'https://fakestoreapi.com/products' );
    const data = await res.json();
    console.log( data );
    dispatch( getProducts( data ) );
  };
};
const bankReducer = ( state = 1000, action ) => {
  switch ( action.type ) {
    case WITHDRAW_MONEY:
      return state - action.payload;
    case DEPOSITE_MONEY:
      return state + action.payload;
    default:
      return state;
  }
};
const productsReducer = ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_PRODCUT:
      return [ ...state, action.payload ];
    case GET_PRODUCTS:
      return [ ...state, ...action.payload ];
    default:
      return state;
  }
};
// merge
const rootReducer = Redux.combineReducers( {
  bank: bankReducer,
  products: productsReducer
} );

  
const store = Redux.createStore( rootReducer, Redux.applyMiddleware( ReduxThunk ) );
store.subscribe( () => {
  console.log( "Current state : ", store.getState() );
  amountValue.innerHTML = store.getState().bank;
} );
let amountInput = document.querySelector( "#amount" );
let amountValue = document.querySelector( "#value" );
amountValue.innerHTML = store.getState().bank;
document.querySelector( "#withdraw" ).addEventListener( "click", () => {
  store.dispatch( withDraw( +amountInput.value ) );
} );
document.querySelector( "#deposite" ).addEventListener( "click", () => {
  store.dispatch( deposite( +amountInput.value ) );
} );

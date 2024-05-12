
const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const DEPOSITE_MONEY = "DEPOSITE_MONEY";


const withDraw = ( amount ) => {
  return {
    type: WITHDRAW_MONEY,
    payload:amount
  }
}
const deposite = ( amount ) => {
  return {
    type: DEPOSITE_MONEY,
    payload: amount
  }
}

// reducer 
const reducer = ( state = 1000, action ) => {
  switch ( action.type ) {
    case WITHDRAW_MONEY:
      return state - action.payload;
    case DEPOSITE_MONEY:
      return state + action.payload;
    default:
      return state;
  }
};
let store = $redux.createStore(reducer);


console.log( store );
console.log( $redux );
store.dispatch(withDraw(10))
store.dispatch(deposite(1000))
console.log( store.getState() );
store.subscribe( () => {
  console.log("current state: ",store.getState())
})
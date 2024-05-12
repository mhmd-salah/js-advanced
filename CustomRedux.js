( function () {
  
  const customRedux = ( function () {

    const createStore = function ( reducer ) {
      let state;
      let listeners = []
      const getState = () => state;
      const dispatch = ( action ) => {
        state = reducer(state, action );
        listeners.forEach((listener)=> listener())
      };
      
      const subscribe = ( listener ) => {
        listeners.push( listener )
        console.log(listeners)
      };

      dispatch({})

      return {
        getState,
        dispatch,
        subscribe,
      }
    }
    
    return {createStore}
  })()

  if ( !window.customRedux ) {
    window.$redux = window.customRedux = customRedux;
  }

} )();
export default function createStore(reducer) {
  // add your code here
  let state;

  function dispatch (reducer){
    state = reducer(state, action)
      render()
    }
  function getstate(){
    return state;
   }

   dispatch({type: '@@init'})

   return{dispatch,
    getstate}
}

function render() {
  const container = document.getElementById('container');
}

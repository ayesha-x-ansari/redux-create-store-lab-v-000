export default function createStore(reducer) {
  // add your code here
  let state;

  function dispath (reducer){
    state = reducer(state, action)
      render()
    }
  function getstate(){
    return state;
   }

   dispatch({@@init})

   return{dispatch,
    getstate}   
}

function render() {
  const container = document.getElementById('container');
}

// PURE REDUX
export default (state = [], action) => {
  switch(action.type) {
    case 'append':
      return state.concat(action.gif);
    case 'delete':
      return state.slice(0, -1);
    default:
      return state;
  }
};

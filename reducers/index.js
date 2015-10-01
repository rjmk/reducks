// PURE REDUX
export default (state = '', action) => {
  switch(action.type) {
    case 'append':
      return state + action.character;
    case 'delete':
      return state.split('').reverse().slice(1).reverse().join('');
    default:
      return state;
  }
};

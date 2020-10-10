const INITIAL_STATE = {
  num1: 0,
  num2: 0,
};
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NUM1':
      return {
        ...state,
        num1:action.payload,
      };
    case 'SET_NUM2':
    return {
      ...state,
      num2:action.payload,
      };
    default:
      return state;
  }
};

export default user;

const initialState = {
  data: [],
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
      };

    case 'LOGIN_SUCCEES':
      return {
        ...state,
        data: action.payload,
      };

    case 'LOGIN_FAILED':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default LoginReducer;

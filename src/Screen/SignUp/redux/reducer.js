const initialState = {
  isSignup: false,
};

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
      };

    case 'SIGNUP_SUCCEES':
      return {
        ...state,
        isSignup: true,
      };

    case 'SIGNUP_FAILED':
      return {
        ...state,
      };

    case 'RESET_AUTH': {
      return {
        ...state,
        isSignup: false,
      };
    }

    default:
      return state;
  }
};

export default SignupReducer;

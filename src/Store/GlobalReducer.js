const initialState = {
  Loading: false,
  Success: {},
  isLogged: false,
  token: {},
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        Loading: action.payload,
      };
    case 'SET_SUCCESS':
      return {
        ...state,
        Success: action.payload,
      };

    case 'SET_IS_LOGGED':
      return {
        ...state,
        isLogged: true,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload.token,
      };

    case 'SET_IS_LOGOUT':
      return {
        ...state,
        isLogged: false,
        token: '',
      };

    default:
      return state;
  }
};

export default GlobalReducer;

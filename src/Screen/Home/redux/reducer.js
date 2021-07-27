const initialState = {
  dataOption: [],
  dataUser: [],
  resBill: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_HOME':
      return {
        ...state,
      };

    case 'GET_OPTION_HOME_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_HOME':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_HOME_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'CREATE_HOME_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_HOME_PAYMENT_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;

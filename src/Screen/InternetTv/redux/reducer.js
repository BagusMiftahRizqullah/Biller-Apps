const initialState = {
  dataOption: [],
  dataUser: [],
  resBill: [],
};

const inTvReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_INTV':
      return {
        ...state,
      };

    case 'GET_OPTION_INTV_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_INTV':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_INTV_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'CREATE_INTV_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_INTV_PAYMENT_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };
    default:
      return state;
  }
};

export default inTvReducer;

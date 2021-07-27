const initialState = {
  dataOption: [],
  dataUser: [],
  resBill: [],
};

const MobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_MOBILE':
      return {
        ...state,
      };

    case 'GET_OPTION_MOBILE_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_MOBILE':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_MOBILE_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'CREATE_MOBILE_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_MOBILE_PAYMENT_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };
    default:
      return state;
  }
};

export default MobileReducer;

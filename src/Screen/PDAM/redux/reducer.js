const initialState = {
  dataOption: [],
  dataUser: [],
  resBill: [],
};

const PDAMOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_PDAM':
      return {
        ...state,
      };

    case 'GET_OPTION_PDAM_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_PDAM':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_PDAM_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'CREATE_PDAM_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_PDAM_PAYMENT_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };
    default:
      return state;
  }
};

export default PDAMOptionReducer;

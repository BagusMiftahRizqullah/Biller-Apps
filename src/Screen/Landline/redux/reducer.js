const initialState = {
  dataOption: [],
  dataUser: [],
  resBill: [],
};

const LandlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_LANDLINE':
      return {
        ...state,
      };

    case 'GET_OPTION_LANDLINE_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_LANDLINE':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_LANDLINE_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'CREATE_LANDLINE_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_LANDLINE_PAYMENT_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };

    default:
      return state;
  }
};

export default LandlineReducer;

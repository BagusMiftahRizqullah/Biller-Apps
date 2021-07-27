const initialState = {
  dataOption: [],
  priceList: [],
  dataUser: [],
  resBill: [],
};

const ElectricityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_OPTION_ELECTRICITY_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_TOKEN_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_TOKEN_ELECTRICITY_SUCCESS':
      return {
        ...state,
        priceList: action.payload,
      };

    case 'GET_TOKEN_ACCOUNT_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_TOKEN_ACCOUNT_ELECTRICITY_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'GET_TAGIHAN_ACCOUNT_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_TAGIHAN_ACCOUNT_ELECTRICITY_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'CREATE_TOKEN_ELECTRICITY_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_TOKEN_ELECTRICITY_PAYMENT_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };

    case 'CREATE_TAGIHAN_ELECTRICITY_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_TAGIHAN_ELECTRICITY_PAYMENT_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };
    default:
      return state;
  }
};

export default ElectricityReducer;

const initialState = {
  dataBank: [],
  paymentMethod: [],
  paymentCreate: [],
};

const BankReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BANK_ACCOUNT':
      return {
        ...state,
      };

    case 'GET_BANK_ACCOUNT_SUCCESS':
      return {
        ...state,
        dataBank: action.payload,
      };
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        paymentMethod: action.payload,
      };

    case 'ADD_NEW_CARD':
      return {
        ...state,
      };

    case 'CONFIRMATION_PAYMENT':
      return {
        ...state,
      };

    case 'CONFIRMATION_PAYMENT_SUCCESS':
      return {
        ...state,
        paymentCreate: action.payload,
      };

    default:
      return state;
  }
};

export default BankReducer;

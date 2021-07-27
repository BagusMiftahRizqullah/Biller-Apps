const initialState = {
  dataPeriod: [],
  dataCustomer: [],
  dataCreateBPJS: [],
};

const BPJSReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PERIOD_BPJS':
      return {
        ...state,
      };

    case 'GET_PERIOD_BPJS_SUCCESS':
      return {
        ...state,
        dataPeriod: action.payload,
      };

    case 'GET_CUSTUMER_BPJS':
      return {
        ...state,
      };

    case 'GET_CUSTOMER_BPJS_SUCCESS':
      return {
        ...state,
        dataCustomer: action.payload,
      };

    case 'CREATE_BPJS':
      return {
        ...state,
      };

    case 'CREATE_BPJS_SUCCESS':
      return {
        ...state,
        dataCreateBPJS: action.payload,
      };

    default:
      return state;
  }
};

export default BPJSReducer;

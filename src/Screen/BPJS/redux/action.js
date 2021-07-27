// GET OPTIONS
export const PeriodBPJSAction = payload => {
  return {type: 'GET_PERIOD_BPJS', payload};
};

// GET OPTIONS
export const PeriodBPJSActionSuccess = payload => {
  return {type: 'GET_PERIOD_BPJS_SUCCESS', payload};
};

// GET COSTUMER INFO
export const CostumerBPJSAction = payload => {
  return {type: 'GET_CUSTUMER_BPJS', payload};
};

// GET OPTIONS
export const CustomerBPJSActionSuccess = payload => {
  return {type: 'GET_CUSTOMER_BPJS_SUCCESS', payload};
};

//CREATE BPJS
export const CreateBPJSAction = payload => {
  return {type: 'CREATE_BPJS', payload};
};

// CREATE_BPJS
export const CreateBPJSActionSuccess = payload => {
  return {type: 'CREATE_BPJS_SUCCESS', payload};
};

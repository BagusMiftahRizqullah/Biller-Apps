// GET OPTIONS
export const PDAMOptionAction = payload => {
  return {type: 'GET_OPTION_PDAM', payload};
};

// GET OPTIONS
export const PDAMOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_PDAM_SUCCESS', payload};
};

// GET ACCOUNT PDAM
export const PDAMAccountAction = payload => {
  return {type: 'GET_ACCOUNT_PDAM', payload};
};

// GET ACCOUNT PDAM
export const PDAMAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_PDAM_SUCCESS', payload};
};

// CREATE PAYMENT PDAM
export const PDAMCreatePaymentAction = payload => {
  return {type: 'CREATE_PDAM_PAYMENT', payload};
};

// GET ACCOUNT PDAM
export const PDAMCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_PDAM_PAYMENT_SUCCESS', payload};
};

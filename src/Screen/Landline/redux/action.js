// GET ACCOUNT LANDLINE
export const LandlineAccountAction = payload => {
  return {type: 'GET_ACCOUNT_LANDLINE', payload};
};

// GET ACCOUNT LANDLINE
export const LandlineAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_LANDLINE_SUCCESS', payload};
};

// CREATE PAYMENT LANDLINE
export const LandlineCreatePaymentAction = payload => {
  return {type: 'CREATE_LANDLINE_PAYMENT', payload};
};

// GET ACCOUNT LANDLINE
export const LandlineCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_LANDLINE_PAYMENT_SUCCESS', payload};
};

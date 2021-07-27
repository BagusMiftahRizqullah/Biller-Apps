// GET OPTIONS
export const MobileOptionAction = payload => {
  return {type: 'GET_OPTION_MOBILE', payload};
};

// GET OPTIONS
export const MobileOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_MOBILE_SUCCESS', payload};
};

// GET ACCOUNT MOBILE
export const MobileAccountAction = payload => {
  return {type: 'GET_ACCOUNT_MOBILE', payload};
};

// GET ACCOUNT MOBILE
export const MobileAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_MOBILE_SUCCESS', payload};
};

// CREATE PAYMENT MOBILE
export const MobileCreatePaymentAction = payload => {
  return {type: 'CREATE_MOBILE_PAYMENT', payload};
};

// GET ACCOUNT MOBILE
export const MobileCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_MOBILE_PAYMENT_SUCCESS', payload};
};

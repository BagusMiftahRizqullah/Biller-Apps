// GET OPTIONS
export const HomeOptionAction = payload => {
  return {type: 'GET_OPTION_HOME', payload};
};

// GET OPTIONS
export const HomeOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_HOME_SUCCESS', payload};
};

// GET ACCOUNT HOME
export const HomeAccountAction = payload => {
  return {type: 'GET_ACCOUNT_HOME', payload};
};

// GET ACCOUNT HOME
export const HomeAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_HOME_SUCCESS', payload};
};

// CREATE PAYMENT HOME
export const HomeCreatePaymentAction = payload => {
  return {type: 'CREATE_HOME_PAYMENT', payload};
};

// GET ACCOUNT HOME
export const HomeCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_HOME_PAYMENT_SUCCESS', payload};
};

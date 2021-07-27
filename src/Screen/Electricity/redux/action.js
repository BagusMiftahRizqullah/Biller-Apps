// GET OPTIONS
export const ElectricityOptionAction = payload => {
  return {type: 'GET_OPTION_ELECTRICITY', payload};
};

// GET OPTIONS
export const ElectricityOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_ELECTRICITY_SUCCESS', payload};
};

// GET Token Price List
export const ElectricityTokenAction = payload => {
  return {type: 'GET_TOKEN_ELECTRICITY', payload};
};

// GET Token Price List
export const ElectricityTokenActionSuccess = payload => {
  return {type: 'GET_TOKEN_ELECTRICITY_SUCCESS', payload};
};

// GET TOKEN ACCOUNT ELECTRICITY
export const ElectricityTokenAccountAction = payload => {
  return {type: 'GET_TOKEN_ACCOUNT_ELECTRICITY', payload};
};

// GET TOKEN ACCOUNT ELECTRICITY
export const ElectricityTokenAccountActionSuccess = payload => {
  return {type: 'GET_TOKEN_ACCOUNT_ELECTRICITY_SUCCESS', payload};
};

// GET TAGIHAN ACCOUNT ELECTRICITY
export const ElectricityTagihanAccountAction = payload => {
  return {type: 'GET_TAGIHAN_ACCOUNT_ELECTRICITY', payload};
};

// GET TAGIHAN ACCOUNT ELECTRICITY
export const ElectricityTagihanAccountActionSuccess = payload => {
  return {type: 'GET_TAGIHAN_ACCOUNT_ELECTRICITY_SUCCESS', payload};
};

// CREATE TOKEN PAYMENT ELECTRICITY
export const ElectricityTokenCreatePaymentAction = payload => {
  return {type: 'CREATE_TOKEN_ELECTRICITY_PAYMENT', payload};
};

// CREATE TOKEN PAYMENT ELECTRICITY
export const ElectricityTokenCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_TOKEN_ELECTRICITY_PAYMENT_SUCCESS', payload};
};

// CREATE TOKEN PAYMENT ELECTRICITY
export const ElectricityTagihanCreatePaymentAction = payload => {
  return {type: 'CREATE_TAGIHAN_ELECTRICITY_PAYMENT', payload};
};

// CREATE TOKEN PAYMENT ELECTRICITY
export const ElectricityTagihanCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_TAGIHAN_ELECTRICITY_PAYMENT_SUCCESS', payload};
};

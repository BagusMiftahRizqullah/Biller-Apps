// GET Bank Account
export const BankAccountAction = payload => {
  return {type: 'GET_BANK_ACCOUNT', payload};
};

// GET Bank Account
export const BankAccountActionSuccess = payload => {
  return {type: 'GET_BANK_ACCOUNT_SUCCESS', payload};
};

// SAVE PAYMENT METHOD
export const SavePaymentMethodAction = payload => {
  return {type: 'SAVE_PAYMENT_METHOD', payload};
};

// CHECK CONFIRMATION PAYMENT
export const ConfirmationPaymentAction = payload => {
  return {type: 'CONFIRMATION_PAYMENT', payload};
};

// CHECK CONFIRMATION PAYMENT
export const ConfirmationPaymentActionSuccess = payload => {
  return {type: 'CONFIRMATION_PAYMENT_SUCCESS', payload};
};

// ADD NEW CARD
export const AddNewCardAction = payload => {
  return {type: 'ADD_NEW_CARD', payload};
};

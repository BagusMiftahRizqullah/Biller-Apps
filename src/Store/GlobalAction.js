export const actionLoading = payload => {
  return {
    type: 'SET_LOADING',
    payload,
  };
};

export const actionSuccess = payload => {
  return {
    type: 'SET_SUCCESS',
    payload,
  };
};

export const actionIsLogged = payload => {
  return {
    type: 'SET_IS_LOGGED',
    payload,
  };
};

export const actionSetToken = payload => {
  return {
    type: 'SET_TOKEN',
    payload,
  };
};

export const actionIsLoggout = payload => {
  return {
    type: 'SET_IS_LOGOUT',
  };
};

// GET OPTIONS
export const NotifAction = payload => {
  return {type: 'GET_NOTIF', payload};
};

// GET OPTIONS
export const NotifActionSuccess = payload => {
  return {type: 'GET_NOTIF_SUCCESS', payload};
};

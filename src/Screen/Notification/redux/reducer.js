const initialState = {
  dataNotif: [],
};

const NotifReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NOTIF':
      return {
        ...state,
      };

    case 'GET_NOTIF_SUCCESS':
      return {
        ...state,
        dataNotif: action.payload,
      };

    default:
      return state;
  }
};

export default NotifReducer;

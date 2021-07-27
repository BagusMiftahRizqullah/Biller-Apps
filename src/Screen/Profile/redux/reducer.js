const initialState = {
  dataOption: [],
  dataUser: [],
  resBill: [],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_INFO_PROFILE':
      return {
        ...state,
      };

    case 'GET_INFO_PROFILE_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'PUT_UPDATE_PROFILE':
      return {
        ...state,
      };

    case 'PUT_UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'POST_UPLOADFOTO_PROFIL':
      return {
        ...state,
      };

    case 'POST_UPLOADFOTO_PROFILE_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };
    default:
      return state;
  }
};

export default ProfileReducer;

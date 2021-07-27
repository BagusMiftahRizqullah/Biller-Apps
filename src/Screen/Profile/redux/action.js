// GET INFO PROFILE
export const ProfileInfoAction = payload => {
  return {type: 'GET_INFO_PROFILE', payload};
};

// GET INFO PROFILE
export const ProfileInfoActionSuccess = payload => {
  return {type: 'GET_INFO_PROFILE_SUCCESS', payload};
};

// PUT UPDATE PROFILE
export const ProfileUpdateAction = payload => {
  return {type: 'PUT_UPDATE_PROFILE', payload};
};

// PUT UPDATE PROFILE
export const ProfileUpdateActionSuccess = payload => {
  return {type: 'PUT_UPDATE_PROFILE_SUCCESS', payload};
};

// POST UPLOAD FOTO PROFILE
export const ProfileUploadFotoAction = payload => {
  return {type: 'POST_UPLOADFOTO_PROFILE', payload};
};

// POST UPLOAD FOTO PROFILE
export const ProfileUploadFotoActionSuccess = payload => {
  return {type: 'POST_UPLOADFOTO_PROFILE_SUCCESS', payload};
};

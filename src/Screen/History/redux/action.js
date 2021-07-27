// GET OPTIONS
export const GetHistoryAction = payload => {
  return {type: 'GET_HISTORY', payload};
};

// GET OPTIONS
export const GetHistoryActionSuccess = payload => {
  return {type: 'GET_HISTORY_SUCCESS', payload};
};

// GET FILTER
export const FilterHistoryAction = payload => {
  return {type: 'FILTER_HISTORY', payload};
};

// GET FILTER
export const FilterHistoryActionSuccess = payload => {
  return {type: 'FILTER_HISTORY_SUCCESS', payload};
};

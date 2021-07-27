const initialState = {
  dataHistory: [],
};

const HistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HISTORY':
      return {
        ...state,
      };

    case 'GET_HISTORY_SUCCESS':
      return {
        ...state,
        dataHistory: action.payload,
      };

    case 'FILTER_HISTORY':
      return {
        ...state,
      };

    case 'FILTER_HISTORY_SUCCESS':
      return {
        ...state,
        dataHistory: action.payload,
      };

    default:
      return state;
  }
};

export default HistoryReducer;

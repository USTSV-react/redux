const initState = {
  loading: false,
  err: null,
  data: {}
};

const details = (state = initState, action) => {
  switch(action.type) {
    case "FETCH_DETAILS_START":
      return {
        ...state,
        loading: true,
        err: null
      };
    case "FETCH_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        err: null,
        data: action.data
      };
    
    case "FETCH_DETAILS_ERROR":
      return {
        ...state,
        loading: false,
        err: action.error
      }

    default:
      return state;
  }
}

export default details;

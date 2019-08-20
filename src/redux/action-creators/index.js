import axios from "axios";

const fetchListStart = () => {
  return {
    type: "FETCH_LIST_START"
  };
}


const fetchListSuccess = (res) => {
  return {
    type: "FETCH_LIST_SUCCESS",
    data: res.data
  };
}

const fetchListError = (err) => {
  return {
    type: "FETCH_LIST_ERROR",
    error: err
  };
}

const fetchDetailsStart = () => {
  return {
    type: "FETCH_DETAILS_START"
  };
}


const fetchDetailsSuccess = (res) => {
  return {
    type: "FETCH_DETAILS_SUCCESS",
    data: res.data
  };
}

const fetchDetailsError = (err) => {
  return {
    type: "FETCH_DETAILS_ERROR",
    error: err
  };
}



export const getList = () => {
  return (dispatch) => {
    dispatch(fetchListStart());
    axios.get("https://api.github.com/users?per_page=100")
      .then(res => {
        dispatch(fetchListSuccess(res));
      })
      .catch(err => {
        dispatch(fetchListError(err));
      });
  };
}

export const getDetails = (login) => {
  return (dispatch) => {
    dispatch(fetchDetailsStart());
    axios.get(`https://api.github.com/users/${login}`)
      .then(res => {
        dispatch(fetchDetailsSuccess(res));
      })
      .catch(err => {
        dispatch(fetchDetailsError(err));
      });
  };
}
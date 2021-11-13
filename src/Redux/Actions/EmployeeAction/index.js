import {
  EMPLOYEE_SET_EMPLOYEES,
  EMPLOYEE_SET_EMPLOYEE,
  EMPLOYEE_DELETE_EMPLOYEE
} from "../../../Constants/ActionTypes";
import axios from '../../../Utils/Api';

export const fetchEmployees = (data, config) => (dispatch) => {
  axios.get('/employees', { params: data }).then(({ data }) => {
    config?.callback && config.callback(data)
    dispatch({ type: config.redux || EMPLOYEE_SET_EMPLOYEES, payload: data.data });
  }).catch(function (error) {
    console.log("Error****:", error?.message);
    config?.fallback && config.fallback(error)
  });
};

export const fetchEmployee = (data, config) => (dispatch) => {
  axios.get(`/employees/:${data.id}`, { params: data }).then(({ data }) => {
    config?.callback && config.callback(data)
    dispatch({ type: config.redux || EMPLOYEE_SET_EMPLOYEE, payload: data.data });
  }).catch(function (error) {
    console.log("Error****:", error?.message);
    config?.fallback && config.fallback(error)
  });
};



export const saveEmployee = (data, config) => dispatch => {
  if (data.id) {
    dispatch(updateRound(data, config));
  } else {
    dispatch(storeRound(data, config));
  }
}


export const storeEmployee = (data, config) => (dispatch) => {
  axios.post('/employees', data
  ).then(({ data }) => {
    config?.callback && config.callback(data.data)
    dispatch({ type: config.redux || EMPLOYEE_SET_EMPLOYEE, payload: data });
    config?.callback && config.callback(data);

  }).catch(function (error) {
    config?.fallback && config.fallback(error)
    console.log("Error****:", error?.message);
  });
};


export const updateEmployee = (data, config) => (dispatch) => {
  axios.put(`/employees/${data.id}`, data
  ).then(({ data }) => {
    config?.callback && config.callback(data);
    dispatch({ type: config.redux || EMPLOYEE_SET_EMPLOYEE, payload: data });
  }).catch(function (error) {
    config?.fallback && config.fallback(data.data)
    console.log("Error****:", error?.message);
  });
};
export const deleteEmployee = (data, config) => (dispatch) => {
  axios.delete(`/employees/${data.id}`, data
  ).then(({ data }) => {
    config?.callback && config.callback(data);
    dispatch({ type: config.redux || EMPLOYEE_DELETE_EMPLOYEE, payload: { id: data.id } });
  }).catch(function (error) {
    config?.fallback && config.fallback(data.data)
    console.log("Error****:", error?.message);
  });
};


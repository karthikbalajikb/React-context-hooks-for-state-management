import { actionTypes } from './constant';

export const reducer = (state, action) => {
  console.log('REDUCERS:', state, action);
  switch (action.type) {
    case actionTypes.LOAD_COURSES:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOAD_COURSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        courses: [...state.courses, ...action.payload],
      };
    case actionTypes.LOAD_COURSES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'OOPS !!! Somethin Went Wrong',
      };
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: 'DARK',
      };
    default:
      return state;
  }
};

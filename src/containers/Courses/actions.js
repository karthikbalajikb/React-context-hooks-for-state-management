import { getCourses } from './effect';

import { actionTypes } from './constant';

export const actions = (dispatch) => {
  function loadCourses() {
    getCourses(dispatch);
    dispatch({
      type: actionTypes.LOAD_COURSES,
    });
  }

  function changeTheme(themeType) {
    dispatch({
      type: actionTypes.CHANGE_THEME,
      themeType,
    });
  }

  return {
    loadCourses,
    changeTheme,
  };
};

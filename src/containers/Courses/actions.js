import { getCourses } from './effect';

export const actions = (dispatch) => {
  function loadCourses() {
    getCourses(dispatch);
    dispatch({
      type: 'LOAD_COURSES',
    });
  }

  function changeTheme(themeType) {
    dispatch({
      type: 'CHANGE_THEME',
      themeType,
    });
  }

  return {
    loadCourses,
    changeTheme,
  };
};

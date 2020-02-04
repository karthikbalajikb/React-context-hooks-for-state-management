import { actionTypes } from './constant';

const mockedCourses = [
  { id: 1, title: 'demo' },
  { id: 1, title: 'demo' },
  { id: 1, title: 'demo' },
];

export const getCourses = async (dispatch) => {
  console.log('making an API call');
  // Make API call
  setTimeout(() => {
    console.log('call loadCoursesSuccess', mockedCourses);
    dispatch({
      type: actionTypes.LOAD_COURSES_SUCCESS,
      payload: mockedCourses,
    });
  }, 5000);
};

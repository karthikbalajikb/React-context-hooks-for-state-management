import React, { useEffect } from 'react';

import { useStateContextValue, useActions } from '../../containers/Courses';

const CourseListing = () => {
  const {
    theme, courses, isLoading, error,
  } = useStateContextValue();
  const { loadCourses, changeTheme } = useActions();

  console.log('theme', theme, courses, isLoading, error);

  useEffect(() => {
    // fetch all
    loadCourses();
  }, []);

  return (
    <div>
      Hello
      <button type="button" onClick={() => changeTheme('DARK')}>
        change Theme
      </button>
      <button type="button" onClick={() => loadCourses()}>
        load
      </button>
    </div>
  );
};

export default CourseListing;

// changeTheme('DARK')
// loadCourses()

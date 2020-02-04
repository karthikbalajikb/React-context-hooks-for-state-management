import React, { useEffect } from 'react';

import { useContextStore, useContextActions } from '../../containers/Courses';

const CourseListing = () => {
  const {
    theme, courses, isLoading, error,
  } = useContextStore();
  const { loadCourses, changeTheme } = useContextActions();

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

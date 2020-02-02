import React from 'react';
import CourseListing from './CourseListing';
import CoursesContainer from '../../containers/Courses';

const CourseListingPage = () => (
  <CoursesContainer>
    <CourseListing />
  </CoursesContainer>
);

export default CourseListingPage;

import React from 'react';
import PropTypes from 'prop-types';

import {
  StateProvider,
  useStateContextValue,
  useActions,
} from '../../hooks/useStateContextProvider';

import { reducer } from './reducer';
import { actions } from './actions';

const CoursesContainer = ({ children }) => {
  const initialState = {
    courses: [],
    theme: 'LIGHT',
    isLoading: false,
    error: null,
  };

  return (
    <StateProvider
      initialState={initialState}
      reducer={reducer}
      actions={actions}
    >
      {children}
    </StateProvider>
  );
};

export { useStateContextValue, useActions };
export default CoursesContainer;

CoursesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import { ContextProvider } from '../../hooks/useContextProvider';
import { useContextStore } from '../../hooks/useContextStore';
import { useContextActions } from '../../hooks/useContextActions';

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
    <ContextProvider
      initialState={initialState}
      reducer={reducer}
      actions={actions}
    >
      {children}
    </ContextProvider>
  );
};

export { useContextStore, useContextActions };
export default CoursesContainer;

CoursesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

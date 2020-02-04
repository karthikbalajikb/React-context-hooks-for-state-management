import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const StateContext = createContext();
const DispatchContext = createContext();

const ContextProvider = ({ initialState, reducer, actions, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const action = actions && actions(dispatch);

  return (
    <DispatchContext.Provider value={{ dispatch, action }}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { ContextProvider, StateContext, DispatchContext };

ContextProvider.propTypes = {
  /**
   * @return {React.Node}
   */
  children: PropTypes.node.isRequired,

  /**
   * Object containing initial state value.
   */
  initialState: PropTypes.shape({}).isRequired,

  reducer: PropTypes.func.isRequired,
  actions: PropTypes.func.isRequired,
};

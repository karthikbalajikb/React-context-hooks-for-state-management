import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const StateContext = createContext();
const DispatchContext = createContext();

const StateProvider = ({
  initialState, reducer, actions, children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const action = actions && actions(dispatch);

  return (
    <DispatchContext.Provider value={{ dispatch, action }}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

const useStateContextValue = () => {
  const state = useContext(StateContext);
  if (state === undefined) {
    throw new Error('must be used within a Provider');
  }
  return state;
};

const useDispatchContext = () => {
  const { dispatch } = useContext(DispatchContext);
  if (dispatch === undefined) {
    throw new Error('must be used within a Provider');
  }
  return dispatch;
};

const useActions = () => {
  const { action } = useContext(DispatchContext);
  if (action === undefined) {
    throw new Error('must be used within a Provider');
  }
  return action;
};

export {
  StateProvider, useStateContextValue, useDispatchContext, useActions,
};

StateProvider.propTypes = {
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

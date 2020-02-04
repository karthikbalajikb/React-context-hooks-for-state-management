import { useContext } from 'react';

import { StateContext } from './useContextProvider';

export const useContextStore = () => {
    const state = useContext(StateContext);
    if (state === undefined) {
      throw new Error('must be used within a Provider');
    }
    return state;
  };
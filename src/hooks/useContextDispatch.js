import { useContext } from 'react';

import { DispatchContext } from './useContextProvider';

export const useContextDispatch = () => {
    const { dispatch } = useContext(DispatchContext);
    if (dispatch === undefined) {
      throw new Error('must be used within a Provider');
    }
    return dispatch;
  };
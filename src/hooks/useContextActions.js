import { useContext } from 'react';

import { DispatchContext } from './useContextProvider';

export const useContextActions = () => {
    const { action } = useContext(DispatchContext);
    if (action === undefined) {
      throw new Error('must be used within a Provider');
    }
    return action;
};
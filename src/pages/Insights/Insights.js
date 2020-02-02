import React from 'react';

import { useStateContextValue } from '../../hooks/useStateContextProvider';

const Insights = () => {
  const { theme } = useStateContextValue();

  console.log('Insights >>>>>', theme);
  return (
    <div>
    Insights
    </div>
  );
};


export default Insights;

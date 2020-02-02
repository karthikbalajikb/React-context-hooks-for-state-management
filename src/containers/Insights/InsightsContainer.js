import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StateProvider } from '../../hooks/useStateContextProvider';

const InsightsContainer = ({ children }) => {
  const [insights, setInsights] = useState([]);

  const getInsights = () => {
    // Make API call
    console.log('2 >>>>>>>>');

    const mockedInsights = [{ id: 1, title: 'Insights 1' }, { id: 2, title: 'Insights 2' }, { id: 3, title: 'Insights 3' }];
    setInsights(mockedInsights);
  };

  useEffect(() => {
    getInsights();
  }, []);

  return (
    <StateProvider initialState={{ insights, getInsights }}>
      {children}
    </StateProvider>
  );
};

export default InsightsContainer;

InsightsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

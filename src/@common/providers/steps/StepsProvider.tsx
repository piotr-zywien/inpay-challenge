import React from 'react';

import ChildrenShape from 'common/shapes/children';

import StepsContext from './StepsContext';
import useSteps from './useSteps';


const StepsProvider: React.FC<ChildrenShape> = ({ children }) => (
  <StepsContext.Provider value={useSteps()}>
    {children}
  </StepsContext.Provider>
);

export default StepsProvider;

import { useContext } from 'react';
import StepsContext from './StepsContext';


export { default } from './StepsProvider';

export const useSteps = () => useContext(StepsContext);

import ChildrenShape from 'common/shapes/children'

type StepShape = {
  title: string,
  content: ChildrenShape,
};

interface StepperShape {
  steps: StepShape[],
}

export default StepperShape;

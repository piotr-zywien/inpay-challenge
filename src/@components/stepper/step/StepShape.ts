import ChildrenShape from 'common/shapes/children';
import StepStateEnum from 'common/enums/state';


interface StepShape {
  index: number,
  title: string,
  state: StepStateEnum,
  children: ChildrenShape,
}

export default StepShape;

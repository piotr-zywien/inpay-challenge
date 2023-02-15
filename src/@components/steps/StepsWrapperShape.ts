import { ObjectSchema } from 'yup';


interface StepsWrapperShape {
  index: number,
  lines?: string[],
  schema?: ObjectSchema,
  shape:? any,
  inits?: [key: string]: {
    initial: any,
    label: string,
  },
  full?: boolean,
}

export default StepsWrapperShape;

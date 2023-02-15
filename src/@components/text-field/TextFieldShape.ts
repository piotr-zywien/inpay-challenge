interface TextFieldShape {
  name: string,
  value: any,
  onChange: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => void,
  error?: boolean,
  helper?: string,
  label: string,
  required?: boolean,
  cols?: number,
}

export default TextFieldShape;

export interface IInput {
  value: string;
  disabled?: boolean;
  name: string;
  isTextArea?: boolean;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  changeHandler: {
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
  };
}

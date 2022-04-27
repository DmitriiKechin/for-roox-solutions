export interface IInput {
  value: string;
  disabled?: boolean;
  name: string;
  isTextArea?: boolean;
  changeHandler: {
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
  };
}

export interface IButton {
  form?: string | undefined;
  children: React.ReactChild;
  type?: 'button' | 'submit' | 'reset' | undefined;
  padding?: string;
  disabled?: boolean;
  onClick?: { (event: React.MouseEvent<HTMLButtonElement>): void };
}

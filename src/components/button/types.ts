type typeButton = 'submit';

export interface IButton {
  children: React.ReactChild;
  type?: typeButton;
  padding?: string;
  disabled?: boolean;
  onClick?: { (event: React.MouseEvent<HTMLButtonElement>): void };
}

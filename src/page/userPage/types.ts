export interface IUserInfo {
  name: string;
  userName: string;
  email: string;
  street: string;
  city: string;
  zipCode: string;
  phone: string;
  webSite: string;
  comment: string;
}
export interface IUserPage {
  userInfo: IUserInfo;

  changeHandler: {
    (
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
      valueName: string,
      userInfo: IUserInfo
    ): void;
  };
}

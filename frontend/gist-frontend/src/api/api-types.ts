export class User {
  constructor(data: any) {
    this.username = !!data.username ? data.username : "";
    this.password = !!data.password ? data.password : "";
    this.fullName = !!data.fullName ? data.fullName : "";
    this.email = !!data.email ? data.email : "";
    this.profilePicture = !!data.profilePicture ? data.profilePicture : "";
  }
  username: string;
  password: string;
  fullName: string;
  email: string;
  profilePicture: string;
}

export interface ICreateUserFormValues {
  username: string;
  password: string;
  fullName: string;
  email: string;
  profilePicture: string;
}

export interface IUserLoginFormValues {
  username: string;
  password: string;
}

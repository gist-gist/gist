export class User {
  constructor(data: any) {
    this.username = data.username;
    this.password = data.password;
    this.fullName = data.fullName;
    this.email = data.email;
  }
  username: string;
  password: string;
  fullName: string;
  email: string;
}

export class Username {
  constructor(data: any) {
    this.username = data;
  }
  username: string;
}

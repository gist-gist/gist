import { User } from "./api-types";
import { APIHandler } from "./api-handler";

export class UsersHandler {
  async getUser(username: string): Promise<User> {
    let data = await APIHandler(`users/getUser/${username}`, "GET");
    return new User(data);
  }
  async getAllUsers(): Promise<User[]> {
    let users: User[] = [];
    let data = await APIHandler(`users/`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        users.push(new User(dataArray[i]));
      }
    }
    return users;
  }
  async createUser(user: User): Promise<User> {
    let data = await APIHandler(`users/`, "POST", user);
    return new User(data);
  }
  async login(username: string, password: string) {
    let data = await APIHandler(`users/login`, "POST", {
      username: username,
      password: password
    });
    return data;
  }
  async deleteUser(username: string): Promise<String> {
    let data = await APIHandler(`users/`, "DELETE", undefined, username);
    if (!!data) {
      return data;
    } else {
      return "error";
    }
  }
}

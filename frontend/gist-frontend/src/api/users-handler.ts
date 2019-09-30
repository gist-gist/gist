import { User, Username } from "./api-types";
import { APIHandler } from "./api-handler";

export class UsersHandler {
  async getUser(username: string): Promise<User> {
    let data = await APIHandler(
      `users/getUser`,
      "POST",
      new Username(username)
    );
    let user = new User(data);
    return user;
  }
  async getAllUsers(): Promise<User[]> {
    let users: User[] = [];
    let data = await APIHandler(`users/`, "GET");
    if (data !== undefined) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        users.push(new User(dataArray[i]));
      }
    }
    return users;
  }
}

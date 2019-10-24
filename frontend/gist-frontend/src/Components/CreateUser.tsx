import React, { Component } from "react";
import { UsersHandler } from "../api/users-handler";
import { User, ICreateUserFormValues } from "../api/api-types";
import { CreateUserPresentational } from "./CreateUserPresentational";

interface ICreateUserProps {
  handler?: UsersHandler;
}
interface ICreateUserState {
  data?: User;
}
export default class CreateUser extends React.Component<
  ICreateUserProps,
  ICreateUserState
> {
  state: ICreateUserState = {
    data: new User({})
  };

  componentDidMount = () => {
    //make api call
  };

  onSubmit = async (user: User) => {
    new UsersHandler().createUser(user);
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <CreateUserPresentational entity={data} onSubmit={this.onSubmit} />
      </>
    );
  }
}

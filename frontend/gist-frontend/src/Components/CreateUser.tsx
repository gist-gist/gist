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

  onSubmit = async (data: ICreateUserFormValues) => {
    console.log("hello submit");
    try {
      const response = await this.props.handler!.createUser(new User(data));
    } catch (e) {
      console.log(e);
    }
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

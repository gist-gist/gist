import React from "react";
import UserLoginComponent from "./UserLoginComponent";
import CreateUserComponent from "./CreateUserComponent";

import { Box, Tab, Tabs, Heading } from "grommet";

interface ILoginOptionsComponentProps {}

interface ILoginOptionsComponentState {
  isLoginTabActive: boolean;
}

export default class LoginOptionsComponent extends React.Component<
  ILoginOptionsComponentProps,
  ILoginOptionsComponentState
> {
  state = {
    isLoginTabActive: true
  };

  onTabChange = () => {
    this.setState({
      isLoginTabActive: !this.state.isLoginTabActive
    });
  };

  render() {
    const { isLoginTabActive } = this.state;
    const loginTitle: String = isLoginTabActive ? "login" : "create";
    return (
      <Box
        border={{
          color: "#1BD7BB",
          size: "large",
          style: "ridge",
          side: "all"
        }}
        round={true}
        width="large"
        background="linear-gradient(160deg,#a8f4d3,#7de3e1,#6cceea,#7cb5e6,#94a7e1,#aba5e5,#c5a1e4,#de9ddd)"
        elevation="xlarge"
        align="center"
        justify="center"
        overflow={{ vertical: "auto" }}
      >
        <Heading>{loginTitle}</Heading>
        <Tabs onActive={this.onTabChange}>
          <Tab title="sign in">
            <Box>
              <UserLoginComponent />
            </Box>
          </Tab>
          <Tab title="sign up">
            <Box>
              <CreateUserComponent />
            </Box>
          </Tab>
        </Tabs>
      </Box>
    );
  }
}

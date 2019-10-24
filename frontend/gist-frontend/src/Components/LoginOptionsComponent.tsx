import React from "react";
import UserLoginComponent from "./UserLoginComponent";
import { Box, Tab, Tabs, Heading } from "grommet";
import CreateUser from "./CreateUser";

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
        background="light-3"
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
              <CreateUser />
            </Box>
          </Tab>
        </Tabs>
      </Box>
    );
  }
}

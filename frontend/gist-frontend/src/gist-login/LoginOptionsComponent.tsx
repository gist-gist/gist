import React from "react";
import UserLoginComponent from "./UserLoginComponent";
import CreateUserComponent from "./CreateUserComponent";

import { Box, Tab, Tabs, Heading, Button } from "grommet";

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

  onSkipLoginButtonClicked = () => {
    console.log("skipped the login page");
  };

  onTabChange = () => {
    this.setState({
      isLoginTabActive: !this.state.isLoginTabActive
    });
  };

  getLoginTitle = () => {
    if (this.state.isLoginTabActive) {
      return "login";
    } else {
      return "create";
    }
  };

  render() {
    let loginTitle: String = this.getLoginTitle();
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
              <CreateUserComponent />
            </Box>
          </Tab>
        </Tabs>
        <Box>
          <Button label="skip login" onClick={this.onSkipLoginButtonClicked} />
        </Box>
      </Box>
    );
  }
}

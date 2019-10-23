import React from "react";
import { Form, FormField, Button, CheckBox, Box } from "grommet";
import { FormNext } from "grommet-icons";

interface IUserLoginComponentState {
  isCheckBoxChecked: boolean;
  isFormComplete: boolean;
  hasUsername: boolean;
  hasPassword: boolean;
}

interface IUserLoginComponentProps {}

export default class UserLoginComponent extends React.Component<
  IUserLoginComponentProps,
  IUserLoginComponentState
> {
  state = {
    isCheckBoxChecked: false,
    isFormComplete: false,
    hasUsername: false,
    hasPassword: false
  };

  checkBoxOnClick = () => {
    this.setState({
      isCheckBoxChecked: !this.state.isCheckBoxChecked
    });
  };

  onUsernameChange = async (e: any) => {
    await this.setState({
      hasUsername: e.target.value.length >= 8 ? true : false
    });

    this.formCompletionStatus();
  };

  onPasswordChange = async (e: any) => {
    await this.setState({
      hasPassword: e.target.value.length >= 8 ? true : false
    });

    this.formCompletionStatus();
  };

  formCompletionStatus = async () => {
    await this.setState({
      isFormComplete: this.state.hasPassword && this.state.hasUsername
    });
  };

  onSkipLoginButtonClicked = () => {
    console.log("skipped the login page");
  };

  render() {
    return (
      <>
        <Form>
          <FormField
            onChange={this.onUsernameChange}
            required={true}
            placeholder="username"
            name="uname"
            label="username"
          />
          <FormField
            onChange={this.onPasswordChange}
            required={true}
            type="password"
            placeholder="password"
            name="pword"
            label="password"
          />
          <Box>
            <Button
              disabled={!this.state.isFormComplete}
              type="submit"
              primary
              label="login"
            />
          </Box>
          <Box style={{ padding: "10px" }}>
            <CheckBox
              disabled={!this.state.isFormComplete}
              onChange={this.checkBoxOnClick}
              checked={this.state.isCheckBoxChecked}
              label="remember me?"
            />
          </Box>
        </Form>
        <Box round={true} elevation="medium">
          <Button
            icon={<FormNext />}
            reverse={true}
            gap="none"
            label="skip login"
            onClick={this.onSkipLoginButtonClicked}
          />
        </Box>
      </>
    );
  }
}

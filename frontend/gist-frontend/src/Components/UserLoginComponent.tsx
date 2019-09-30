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
    console.log(e.target.value);

    if (e.target.value.length > 0) {
      await this.setState({
        hasUsername: true
      });
    } else {
      await this.setState({
        hasUsername: false
      });
    }

    this.formCompletionStatus();
  };

  onPasswordChange = async (e: any) => {
    console.log(e.target.value);

    if (e.target.value.length > 0) {
      await this.setState({
        hasPassword: true
      });
    } else {
      await this.setState({
        hasPassword: false
      });
    }

    this.formCompletionStatus();
  };

  formCompletionStatus = async () => {
    if (this.state.hasPassword && this.state.hasUsername) {
      await this.setState({
        isFormComplete: true
      });
    } else {
      await this.setState({
        isFormComplete: false
      });
    }
  };

  onSkipLoginButtonClicked = () => {
    console.log("skipped the login page");
  };

  render() {
    return (
      <div>
        <Form>
          <FormField
            onChange={this.onUsernameChange}
            required={true}
            placeholder="username"
            name="username"
            label="username"
          />
          <FormField
            onChange={this.onPasswordChange}
            required={true}
            type="password"
            placeholder="password123"
            name="password"
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
      </div>
    );
  }
}

import React from "react";
import { Form, FormField, Button, CheckBox, Box } from "grommet";

interface IUserLoginComponentState {
  checked: boolean;
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
    checked: false,
    isFormComplete: false,
    hasUsername: false,
    hasPassword: false
  };

  checkBoxOnClick = () => {
    this.setState({
      checked: !this.state.checked
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
              onChange={this.checkBoxOnClick}
              checked={this.state.checked}
              label="remember me?"
            />
          </Box>
        </Form>
      </div>
    );
  }
}

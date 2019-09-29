import React from "react";
import { Form, FormField, Button, Box } from "grommet";
import { User } from "grommet-icons";

interface ICreateUserComponentProps {}

interface ICreateUserComponentState {
  isFormComplete: boolean;
}

export default class CreateUserComponent extends React.Component<
  ICreateUserComponentProps,
  ICreateUserComponentState
> {
  state = {
    isFormComplete: false
  };

  onImageClick = () => {
    console.log("image button clicked");
  };

  render() {
    return (
      <div>
        <Form>
          <FormField
            required={true}
            placeholder="butla leavenworth"
            name="fullName"
            label="full name"
          />
          <FormField
            required={true}
            placeholder="username"
            name="username"
            label="username"
          />
          <FormField
            required={true}
            type="password"
            placeholder="password123"
            name="password"
            label="password"
          />
          <FormField
            required={true}
            type="password"
            placeholder="password123...again"
            name="secondPassword"
            label="enter password again"
          />
          <FormField
            required={true}
            placeholder="youremail@email.com"
            name="email"
            label="email"
          />
          <FormField
            required={false}
            name="profilePicture"
            label="profile picture"
          >
            <Box align="center" pad={{ bottom: "small" }} round="full">
              <User size="large" />
              <Button onClick={this.onImageClick} label="select image" />
            </Box>
          </FormField>
          <Box pad={{ bottom: "small" }}>
            <Button
              disabled={!this.state.isFormComplete}
              type="submit"
              primary
              label="create"
            />
          </Box>
        </Form>
      </div>
    );
  }
}

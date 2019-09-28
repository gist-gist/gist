import React from "react";
import { Form, Heading, FormField, Button } from "grommet";

export default class UserLoginComponent extends React.Component {
  render() {
    return (
      <div>
        <Heading>sign up</Heading>
        <Form>
          <FormField name="username" label="username" />
          <Button type="submit" primary label="create" />
        </Form>
      </div>
    );
  }
}

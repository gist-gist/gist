import React from "react";
import { Form, FormField, Button, CheckBox } from "grommet";

export default class UserLoginComponent extends React.Component {
  render() {
    return (
      <div>
        <Form>
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
          <Button type="submit" primary label="login" />
          <div style={{ padding: "10px" }}>
            <CheckBox checked={true} label="remember me?" />
          </div>
        </Form>
      </div>
    );
  }
}

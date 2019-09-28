import React from "react";

import { Form, FormField, Button } from "grommet";

export default class CreateUserComponent extends React.Component {
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
          <FormField
            required={true}
            type="password"
            placeholder="password123...again"
            name="secondPassword"
            label="enter password again"
          />

          <FormField
            required={true}
            placeholder="joshtilman@strangeencounters.com"
            name="email"
            label="email"
          />

          <Button type="submit" primary label="create" />
        </Form>
      </div>
    );
  }
}

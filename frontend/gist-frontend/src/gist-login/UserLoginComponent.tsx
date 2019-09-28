import React from "react";
import { Form, FormField, Button, CheckBox, Box, Grommet } from "grommet";

const theme = {
  checkBox: {
    hover: {
      border: {
        color: "#08B3E5"
      }
    }
  },
  button: {
    hover: {
      border: {
        color: "#08B3E5"
      }
    }
  }
};

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
          <Box>
            <Button type="submit" primary label="login" />
          </Box>
          <Box style={{ padding: "10px" }}>
            <Grommet theme={theme}>
              <CheckBox checked={true} label="remember me?" />
            </Grommet>
          </Box>
        </Form>
      </div>
    );
  }
}

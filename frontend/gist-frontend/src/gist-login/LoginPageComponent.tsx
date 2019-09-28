import React from "react";
import UserLoginComponent from "./UserLoginComponent";
import CreateUserComponent from "./CreateUserComponent";
import AboutGistComponent from "./AboutGistComponent";

import { Box, Grommet, Tab, Tabs, Heading } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

export default class LoginPageComponent extends React.Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <Box fill background="brand">
          <Box
            border={{
              color: "border",
              size: "large",
              style: "ridge",
              side: "all"
            }}
            direction="row"
            flex
            overflow={{ horizontal: "hidden" }}
          >
            <Box flex align="center" justify="center">
              <AboutGistComponent />
            </Box>
            <Box
              width="large"
              background="light-2"
              elevation="large"
              align="center"
              justify="center"
            >
              <Heading>gist</Heading>
              <Tabs>
                <Tab title="sign in">
                  <Box
                    width="large"
                    elevation="large"
                    align="center"
                    justify="center"
                  >
                    <UserLoginComponent />
                  </Box>
                </Tab>
                <Tab title="sign up">
                  <Box
                    width="large"
                    elevation="large"
                    align="center"
                    justify="center"
                  >
                    <CreateUserComponent />
                  </Box>
                </Tab>
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

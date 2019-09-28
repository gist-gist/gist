import React from "react";
import UserLoginComponent from "./UserLoginComponent";
import CreateUserComponent from "./CreateUserComponent";
import AboutGistComponent from "./AboutGistComponent";

import { Box, Grommet, Tab, Tabs, Heading } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#2AF598"
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
            round={true}
            direction="row"
            flex
            overflow={{ horizontal: "hidden" }}
          >
            <Box flex align="center" justify="center">
              <AboutGistComponent />
            </Box>
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
            >
              <Heading>gist</Heading>
              <Tabs>
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
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

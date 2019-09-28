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
  },
  tab: {
    hover: {
      color: "#08B3E5"
    },
    active: {
      color: "#08B3E5"
    }
  }
};

export default class LoginPageComponent extends React.Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <Box fill background="brand">
          <Box
            pad="small"
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
              background="url(https://www.jpl.nasa.gov/images/spitzer/20181023/pia22566-16.jpg)"
              //background="light-3" // change the background to this to see how it actually looks like
              elevation="xlarge"
              align="center"
              justify="center"
              overflow={{ vertical: "auto" }}
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

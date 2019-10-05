import React from "react";
import LoginOptionsComponent from "./LoginOptionsComponent";
import AboutGistComponent from "./AboutGistComponent";

import { Box, Grommet } from "grommet";

interface ILoginPageComponentProps {
  theme: any;
}

export default class LoginPageComponent extends React.Component<
  ILoginPageComponentProps
> {
  render() {
    return (
      <Grommet theme={this.props.theme} full>
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
            <LoginOptionsComponent />
          </Box>
        </Box>
      </Grommet>
    );
  }
}

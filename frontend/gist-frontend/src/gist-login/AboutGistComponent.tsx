import React from "react";

import { Clock, Heading, Box } from "grommet";

export default class AboutGistComponent extends React.Component {
  render() {
    return (
      <div>
        <Heading>about gist</Heading>
        <Box>
          <Clock alignSelf="center" type="digital" hourLimit="12" />
        </Box>
      </div>
    );
  }
}

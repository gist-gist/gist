import React from "react";

import { Clock, Heading, Box, Meter } from "grommet";

export default class AboutGistComponent extends React.Component {
  render() {
    return (
      <div>
        <Heading>about gist</Heading>
        <Box>
          <Clock alignSelf="center" type="digital" hourLimit="12" />
        </Box>
        <Box pad="small">
          <Meter
            type="circle"
            values={[
              {
                value: 75,
                label: "we're still making progress",
                color: "neutral-3"
              }
            ]}
          />
        </Box>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Grommet, Grid, Box, Button, Text } from "grommet";
import { User, Group } from "grommet-icons";
import { theme } from "../Helpers/theme";

export default class DashboardComponent extends Component {
  render() {
    return (
      <>
        <Grommet full theme={theme}>
          <Grid
            fill
            rows={["auto", "flex"]}
            columns={["auto", "flex"]}
            areas={[
              { name: "sidebar", start: [0, 1], end: [0, 1] },
              { name: "main", start: [1, 1], end: [1, 1] }
            ]}
          >
            <Box
              gridArea="sidebar"
              background={{ color: "#2AF598" }}
              width="xsmall"
              animation={[
                { type: "fadeIn", duration: 300 },
                { type: "slideRight", size: "xlarge", duration: 150 }
              ]}
            >
              <Button key={"user"} href="#" hoverIndicator>
                <Box
                  pad={{ horizontal: "medium", vertical: "small" }}
                  style={{ paddingLeft: 35 }}
                >
                  <User color="light-2" />
                </Box>
              </Button>
              <Button key={"group"} href="#" hoverIndicator>
                <Box
                  pad={{ horizontal: "medium", vertical: "small" }}
                  style={{ paddingLeft: 35 }}
                >
                  <Group color="light-2" />
                </Box>
              </Button>
            </Box>

            <Box gridArea="main" justify="center" align="center">
              <Text>main</Text>
            </Box>
          </Grid>
        </Grommet>
      </>
    );
  }
}

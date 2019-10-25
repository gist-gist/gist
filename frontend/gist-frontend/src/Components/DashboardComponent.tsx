import React, { Component } from "react";
import { Box, Button, Text, Grommet } from "grommet";
import { User, Group } from "grommet-icons";
import { Row } from "antd";
import { theme } from "../Helpers/theme";

export default class DashboardComponent extends Component {
  state = {
    isGroupOpen: false
  };

  toggleGroupSidebar = () => {
    const { isGroupOpen } = this.state;
    this.setState({
      isGroupOpen: !isGroupOpen
    });
  };

  getOpenGroupsComponent = () => {
    return (
      <Row
        type="flex"
        justify="center"
        align="top"
        style={{ gridTemplateColumns: "4vw 11vw 85vw", display: "grid" }}
      >
        <div
          style={{
            height: "100vh",
            backgroundColor: "#2AF598",
            width: 82,
            boxShadow: "10px 10px 5px grey"
          }}
        >
          <Button key={"user"} href="#" hoverIndicator>
            <Box
              pad={{ horizontal: "medium", vertical: "small" }}
              style={{ paddingLeft: 28 }}
            >
              <User color="light-2" />
            </Box>
          </Button>
          <Button
            key={"group"}
            href="#"
            hoverIndicator
            onClick={this.toggleGroupSidebar}
          >
            <Box
              pad={{ horizontal: "medium", vertical: "small" }}
              style={{ paddingLeft: 28 }}
            >
              <Group color="light-2" />
            </Box>
          </Button>
        </div>
        <div
          style={{
            height: "100vh",
            backgroundColor: "#2AF598",
            opacity: 0.9,
            width: 212,
            borderRadius: "0px 30px 30px 0px"
          }}
        ></div>

        <div>Main Content</div>
      </Row>
    );
  };

  getClosedGroupsComponent = () => {
    return (
      <Row
        type="flex"
        justify="center"
        align="top"
        style={{ gridTemplateColumns: "4vw  96vw", display: "grid" }}
      >
        <div
          style={{
            height: "100vh",
            backgroundColor: "#2AF598",
            width: 78,
            borderRadius: "0px 15px 15px 0px"
          }}
        >
          <Button key={"user"} href="#" hoverIndicator>
            <Box
              pad={{ horizontal: "medium", vertical: "small" }}
              style={{ paddingLeft: 28 }}
            >
              <User color="light-2" />
            </Box>
          </Button>
          <Button
            key={"group"}
            href="#"
            hoverIndicator
            onClick={this.toggleGroupSidebar}
          >
            <Box
              pad={{ horizontal: "medium", vertical: "small" }}
              style={{ paddingLeft: 28 }}
            >
              <Group color="light-2" />
            </Box>
          </Button>
        </div>

        <div>Main Content</div>
      </Row>
    );
  };
  render() {
    const { isGroupOpen } = this.state;
    return (
      <>
        <Grommet theme={theme}>
          {isGroupOpen
            ? this.getOpenGroupsComponent()
            : this.getClosedGroupsComponent()}
        </Grommet>
      </>
    );
  }
}

import React from "react";
import { Form, FormField, Button, Box, Layer, Heading, Select } from "grommet";
import { User, UserFemale, UserManager } from "grommet-icons";

interface ICreateUserComponentProps {}

interface ICreateUserComponentState {
  showPictureModal: boolean;
  image: JSX.Element;
}

export default class CreateUserComponent extends React.Component<
  ICreateUserComponentProps,
  ICreateUserComponentState
> {
  state = {
    showPictureModal: false,
    image: <User />
  };
  onImageButtonClick = () => {
    console.log("image button clicked");

    this.setState({
      showPictureModal: !this.state.showPictureModal
    });
  };

  getPhotoSelectorLayer = () => {
    return this.state.showPictureModal ? (
      <Layer
        position="top"
        onEsc={this.onImageButtonClick}
        onClickOutside={this.onImageButtonClick}
      >
        <Box
          pad="small"
          elevation="large"
          border={{
            size: "large",
            style: "inset",
            side: "all",
            color: "neutral-3"
          }}
        >
          <Heading level="3">please select an import option</Heading>
          <Box pad="small">
            <Button label="from computer" />
          </Box>
          <Box pad="small">
            <Button label="from URL" />
          </Box>

          <Heading textAlign="center" level="4">
            ...or choose from some defaults!
          </Heading>
          <Box pad={{ right: "small", left: "small", bottom: "small" }}>
            <Select
              icon={<User />}
              options={["User", "UserFemale", "UserManager"]}
              value={"User"}
            />
          </Box>
        </Box>
      </Layer>
    ) : (
      ""
    );
  };

  render() {
    const photoSelectorLayer = this.getPhotoSelectorLayer();
    return (
      <div>
        <Form>
          <FormField
            required={true}
            placeholder="butla leavenworth"
            name="fullName"
            label="full name"
          />
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
            placeholder="youremail@email.com"
            name="email"
            label="email"
          />
          <FormField
            required={false}
            name="profilePicture"
            label="profile picture"
          >
            <Box align="center" pad={{ bottom: "small" }} round="full">
              <User color="neutral-3" size="large" />
              <Button
                onClick={this.onImageButtonClick}
                label="select image (default selected)"
              />
              {photoSelectorLayer}
            </Box>
          </FormField>
          <Box pad={{ bottom: "small" }}>
            <Button type="submit" primary label="create" />
          </Box>
        </Form>
      </div>
    );
  }
}

import React from "react";
import { Form, FormField, Button, Box, Layer, Heading, Select } from "grommet";
import { User, UserFemale, UserManager } from "grommet-icons";
import * as Yup from "yup";

interface ICreateUserComponentProps {}

interface ICreateUserComponentState {
  showPictureModal: boolean;
  imageName: string;
}

const CreateUserSchema = Yup.object().shape({
  fullName: Yup.string().required("required"),
  username: Yup.string() // restrictions on username?
    .required("required")
    .min(8, "too short!")
    .max(25, "too long!"),
  password: Yup.string()
    .required("required")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "password must have at least one lowercase, one uppercase, one numeric, one special character, and be at least 8 characters in length"
    ),
  password2: Yup.string()
    .required("required")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "password must have at least one lowercase, one uppercase, one numeric, one special character, and be at least 8 characters in length"
    ),
  email: Yup.string()
    .required("required")
    .email("invalid email"),
  profilePicture: Yup.array()
});

export default class CreateUserComponent extends React.Component<
  ICreateUserComponentProps,
  ICreateUserComponentState
> {
  state = {
    showPictureModal: false,
    imageName: "User"
  };
  onSelectImageClick = () => {
    console.log("select image button clicked");

    this.setState({
      showPictureModal: !this.state.showPictureModal
    });
  };

  getIcon = (color: string, size: string) => {
    const { imageName } = this.state;
    let choice: JSX.Element = <User color={color} size={size} />;
    if (imageName === "UserFemale") {
      choice = <UserFemale color={color} size={size} />;
    } else if (imageName === "UserManager") {
      choice = <UserManager color={color} size={size} />;
    }
    return choice;
  };

  getPhotoSelectorLayer = () => {
    let defaultIconChoice: JSX.Element = this.getIcon("#666666", "24px");
    return this.state.showPictureModal ? (
      <Layer
        position="top"
        onEsc={this.onSelectImageClick}
        onClickOutside={this.onSelectImageClick}
      >
        <Box
          animation="zoomIn"
          pad="small"
          background="light-3"
          elevation="large"
          border={{
            size: "large",
            style: "ridge",
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
              icon={defaultIconChoice}
              options={["User", "UserFemale", "UserManager"]}
              value={this.state.imageName}
              onChange={({ option }) => this.setState({ imageName: option })}
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
    let iconChoice: JSX.Element = this.getIcon("neutral-3", "large");
    return (
      <>
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
              <Box pad={{ bottom: "xxsmall" }}>{iconChoice}</Box>
              <Button
                onClick={this.onSelectImageClick}
                label="select image (default selected)"
              />
              {photoSelectorLayer}
            </Box>
          </FormField>
          <Box pad={{ bottom: "small" }}>
            <Button type="submit" primary label="create" />
          </Box>
        </Form>
      </>
    );
  }
}

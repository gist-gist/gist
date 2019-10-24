import React from "react";
import {
  Form,
  FormField,
  Button,
  Box,
  Layer,
  Heading,
  Select,
  TextInput
} from "grommet";
import { User, UserFemale, UserManager } from "grommet-icons";
import * as Yup from "yup";
import { InjectedFormikProps, FormikErrors, withFormik } from "formik";
import { ICreateUserFormValues } from "../api/api-types";

interface ICreateUserProps {
  entity: any;
  onSubmit: (
    values: ICreateUserFormValues,
    setErrors: (errors: FormikErrors<ICreateUserFormValues>) => void
  ) => Promise<void>;
}

class CreateUserInternal extends React.Component<
  InjectedFormikProps<ICreateUserProps, ICreateUserFormValues>
> {
  state = {
    showPictureModal: false,
    imageName: "User"
  };

  onSelectImageClick = () => {
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
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit
    } = this.props;
    return (
      <>
        <form
          onSubmit={() => {
            console.log("hi");
            handleSubmit();
          }}
        >
          <FormField label="full name" error={errors.fullName}>
            <TextInput
              name="fullName"
              value={values.fullName || ""}
              onChange={handleChange}
              placeholder="butla leavenworth"
            />
          </FormField>
          <FormField label="username" error={errors.username}>
            <TextInput
              placeholder="username"
              name="username"
              onChange={handleChange}
              value={values.username || ""}
            />
          </FormField>
          <FormField label="password" error={errors.password}>
            <TextInput
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
              value={values.password || ""}
            />
          </FormField>
          {/* <FormField
            type="password"
            placeholder="password...again"
            name="secondPassword"
            label="enter password again"
            onChange={handleChange}
            value={values.secondPassword}
          /> */}
          <FormField label="email" error={errors.email}>
            <TextInput
              placeholder="youremail@email.com"
              name="email"
              onChange={handleChange}
              value={values.email || ""}
            />
          </FormField>
          <FormField
            name="profilePicture"
            label="profile picture"
            onChange={handleChange}
            value={values.profilePicture}
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
        </form>
      </>
    );
  }
}

const CreateUserValidators = Yup.object().shape({
  fullName: Yup.string().required("full name is required"),
  username: Yup.string() // restrictions on username?
    .required("username is required")
    .min(8, "username is too short!")
    .max(25, "username is too long!"),
  password: Yup.string()
    .required("password is required")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "password must have at least one lowercase, one uppercase, one numeric, one special character, and be at least 8 characters in length"
    ),
  password2: Yup.string()
    .required("verifying your password is required")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "password must have at least one lowercase, one uppercase, one numeric, one special character, and be at least 8 characters in length"
    ),
  email: Yup.string()
    .required("email is required")
    .email("invalid email"),
  profilePicture: Yup.array()
});

export const CreateUserPresentational = withFormik<
  ICreateUserProps,
  ICreateUserFormValues
>({
  mapPropsToValues: (props: ICreateUserProps) => ({
    username: props.entity.username,
    password: props.entity.password,
    fullName: props.entity.fullName,
    email: props.entity.email,
    profilePicture: props.entity.profilePicture
  }),
  validationSchema: () => CreateUserValidators,
  validateOnChange: true,

  handleSubmit: (
    values: ICreateUserFormValues,
    { props, setErrors, setSubmitting }
  ) => {
    setSubmitting(true);
    props.onSubmit(values, setErrors);

    setSubmitting(false);
  }
})(CreateUserInternal);

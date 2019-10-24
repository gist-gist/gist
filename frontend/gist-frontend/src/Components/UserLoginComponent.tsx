import React from "react";
import {
  Form,
  FormField,
  Button,
  CheckBox,
  Box,
  Grommet,
  TextInput
} from "grommet";
import { FormNext } from "grommet-icons";
import { Formik, yupToFormErrors } from "formik";
import { theme } from "../Helpers/theme";
import { IUserLoginFormValues } from "../api/api-types";
import * as Yup from "yup";
import { UsersHandler } from "../api/users-handler";

interface IUserLoginComponentState {
  isCheckBoxChecked: boolean;
  isFormComplete: boolean;
  hasUsername: boolean;
  hasPassword: boolean;
}

interface IUserLoginComponentProps {}

export default class UserLoginComponent extends React.Component<
  IUserLoginComponentProps,
  IUserLoginComponentState
> {
  state = {
    isCheckBoxChecked: false,
    isFormComplete: false,
    hasUsername: false,
    hasPassword: false,
    submitted: false
  };

  checkBoxOnClick = () => {
    this.setState({
      isCheckBoxChecked: !this.state.isCheckBoxChecked
    });
  };

  onUsernameChange = async (e: any) => {
    await this.setState({
      hasUsername: e.target.value.length >= 8 ? true : false
    });

    this.formCompletionStatus();
  };

  onPasswordChange = async (e: any) => {
    await this.setState({
      hasPassword: e.target.value.length >= 8 ? true : false
    });

    this.formCompletionStatus();
  };

  formCompletionStatus = async () => {
    await this.setState({
      isFormComplete: this.state.hasPassword && this.state.hasUsername
    });
  };

  onSkipLoginButtonClicked = () => {
    console.log("skipped the login page");
  };

  submitForm = () => {};
  render() {
    const { submitted } = this.state;
    return (
      <>
        <Grommet theme={theme}>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
              console.log(
                new UsersHandler().login(values.username, values.password)
              );
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Required"),
              password: Yup.string().required("Required")
            })}
          >
            {props => {
              const {
                values,
                errors,
                isSubmitting,
                handleChange,
                handleSubmit
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <FormField label="username" error={errors.username}>
                    <TextInput
                      name="username"
                      placeholder="username"
                      onChange={handleChange}
                      value={values.username || ""}
                    />
                  </FormField>
                  <FormField label="password" error={errors.password}>
                    <TextInput
                      name="password"
                      placeholder="password"
                      type="password"
                      onChange={handleChange}
                      value={values.password || ""}
                    />
                  </FormField>
                  <Button type="submit" primary label="Create" />
                </form>
              );
            }}
          </Formik>
        </Grommet>
      </>
    );
  }
}

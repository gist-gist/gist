import React from "react";
import { FormField, Button, Grommet, TextInput } from "grommet";
import { Formik } from "formik";
import { theme } from "../Helpers/theme";
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
  render() {
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
                await new UsersHandler().login(values.username, values.password)
              );
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Required"),
              password: Yup.string().required("Required")
            })}
          >
            {props => {
              const { values, errors, handleChange, handleSubmit } = props;
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
                  <Button type="submit" primary label="login" />
                </form>
              );
            }}
          </Formik>
        </Grommet>
      </>
    );
  }
}

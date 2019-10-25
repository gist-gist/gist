import React from "react";
import { Grommet, TextInput, FormField, Button } from "grommet";
import { theme } from "../Helpers/theme";
import { Formik } from "formik";
import * as Yup from "yup";
import { UsersHandler } from "../api/users-handler";
import { User } from "../api/api-types";

interface ICreateUserProps {}
interface ICreateUserState {}

export default class CreateUserComponent extends React.Component<
  ICreateUserProps,
  ICreateUserState
> {
  render() {
    return (
      <>
        <Grommet theme={theme}>
          <Formik
            initialValues={{
              username: "",
              password: "",
              fullName: "",
              email: ""
            }}
            onSubmit={async (values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
              console.log(
                await new UsersHandler().createUser(new User(values))
              );
            }}
            validationSchema={Yup.object().shape({
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
              fullName: Yup.string().required("full name is required"),
              email: Yup.string()
                .required("email is required")
                .email("invalid email")
            })}
          >
            {props => {
              const { values, errors, handleChange, handleSubmit } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <FormField label="full name" error={errors.fullName}>
                    <TextInput
                      name="fullName"
                      placeholder="full name"
                      onChange={handleChange}
                      value={values.fullName}
                    />
                  </FormField>
                  <FormField label="email" error={errors.email}>
                    <TextInput
                      name="email"
                      placeholder="email"
                      onChange={handleChange}
                      value={values.email}
                    />
                  </FormField>
                  <FormField label="username" error={errors.username}>
                    <TextInput
                      name="username"
                      placeholder="username"
                      onChange={handleChange}
                      value={values.username}
                    />
                  </FormField>
                  <FormField label="password" error={errors.password}>
                    <TextInput
                      name="password"
                      placeholder="password"
                      onChange={handleChange}
                      value={values.password}
                      type="password"
                    />
                  </FormField>
                  <Button type="submit" primary label="create" />
                </form>
              );
            }}
          </Formik>
        </Grommet>
      </>
    );
  }
}

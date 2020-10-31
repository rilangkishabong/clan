import { Button } from "@material-ui/core";
import Axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./Components/Formik/FormikControl";

export const SignUp = ({ history }) => {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),
  });
  const onSubmit = async (values, onSubmitProps) => {
    console.log(values);
    const url = "http://localhost:3002/signup";
    const options = {
      method: "POST",
      headers: {},
      data: values,
      url: url,
    };

    try {
      const { data } = await Axios(options);
      console.log(data.token);
      localStorage.setItem("logged", true);
      localStorage.setItem("token", data.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => {
        return (
          <Form>
            <FormikControl control="input" label="username" name="username" />
            <FormikControl control="input" label="password" name="password" />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Sign-up
            </Button>
            <Button
              variant="text"
              color="secondary"
              fullWidth
              onClick={() => history.push("/signin")}
            >
              Already a user? Sign-in
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

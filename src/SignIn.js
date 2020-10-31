import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import FormikControl from "./Components/Formik/FormikControl";
import * as Yup from "yup";
import Axios from "axios";

function SignIn({ history }) {
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
    const url = "http://localhost:3002/signin";
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
    <div>
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
                variant="outlined"
                color="primary"
                fullWidth
                disabled={!props.isValid}
              >
                Sign-in
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => history.push("/signup")}
              >
                Not registered? Sign-up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default SignIn;

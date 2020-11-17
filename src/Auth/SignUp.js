import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import * as Yup from "yup";
import { useStyles } from "./useStyles";

export const SignUp = ({ history }) => {
  const classes = useStyles();
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
    const url = "https://localhost:3002/signup";
    const options = {
      method: "POST",
      headers: {},
      data: values,
      url: url,
    };

    try {
      const { data } = await Axios(options);
      console.log(data.token);
      localStorage.setItem("token", data.token);
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.background}
    >
      <Grid container item direction="row" justify="center">
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography color="secondary" variant="h4">
                Clan Relations
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => {
                  return (
                    <Form>
                      <Field
                        component={TextField}
                        label="username"
                        name="username"
                        variant="outlined"
                        margin="dense"
                      />
                      <Field
                        component={TextField}
                        type="password"
                        label="password"
                        name="password"
                        variant="outlined"
                        margin="dense"
                      />
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

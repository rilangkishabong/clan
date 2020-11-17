import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import React from "react";
import * as Yup from "yup";
import Axios from "axios";
import { useStyles } from "./useStyles";
import { TextField } from "formik-material-ui";

function SignIn({ history }) {
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
    const url = "https://localhost:3002/signin";
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
      history.push("/home");
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
      <Grid container justify="center">
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
                        fullWidth
                      />
                      <Field
                        component={TextField}
                        type="password"
                        label="password"
                        name="password"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        disabled={!props.isValid}
                      >
                        Sign-in
                      </Button>
                      <Button
                        variant="text"
                        color="secondary"
                        fullWidth
                        onClick={() => history.push("/signup")}
                      >
                        Not registered? Sign-up
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
}

export default SignIn;

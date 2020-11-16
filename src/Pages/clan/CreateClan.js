import { Button, Card, CardContent, Typography } from "@material-ui/core";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./../../Components/Formik/FormikControl";

export const CreateClan = () => {
  const initialValues = {
    name: "",
    origin: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    origin: Yup.string().required("Origin is required"),
  });
  const onSubmit = async (values, onSubmitProps) => {
    console.log(values);
    const url = "https://localhost:3002/api/clan/";
    const options = {
      method: "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      data: values,
      url: url,
    };

    try {
      const res = await Axios(options);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography color="secondary" variant="h6">
          Enter the clan details :
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => {
            return (
              <Form>
                <Field
                  component={TextField}
                  label="name"
                  name="name"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />
                <Field
                  component={TextField}
                  label="origin"
                  name="origin"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  fullWidth
                >
                  Register Clan
                </Button>
              </Form>
            );
          }}
        </Formik>
      </CardContent>
    </Card>
  );
};

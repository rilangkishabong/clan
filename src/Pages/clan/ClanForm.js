import { Button, Typography } from "@material-ui/core";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import * as Yup from "yup";

export const ClanForm = ({ match, isEdit = false }) => {
  console.log(match);
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
    const url = "https://localhost:3002/api/clan";
    const options = {
      method: isEdit ? "PUT" : "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      data: values,
      url: isEdit ? `${url}/${match.params.id}` : url,
    };

    try {
      const res = await Axios(options);
      console.log(res);
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
      {() => {
        return (
          <Form>
            <Typography color="secondary" variant="h6">
              Enter the clan details :
            </Typography>
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
              {isEdit ? "Update Clan" : "Register Clan"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

import { Button, Typography } from "@material-ui/core";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

export const ClanForm = ({ id, isEdit = false, refresh, onClose, history }) => {
  const [clan, setClan] = useState(null);
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
      url: isEdit ? `${url}/${id}` : url,
    };

    try {
      const res = await Axios(options);
      if (isEdit) {
        refresh();
        onClose();
      } else {
        history.push("/clan/list");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const getClan = async () => {
      const url = `https://localhost:3002/api/clan/${id}`;
      const options = {
        method: "GET",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        url: url,
      };
      try {
        const { data } = await Axios(options);
        console.log(data);
        setClan(data);
      } catch (e) {
        console.error(e);
      }
    };
    getClan();
  }, []);

  return (
    <Formik
      initialValues={clan || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
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

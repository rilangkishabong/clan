import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

function Input(props) {
  const classes = useStyles();
  const { label, name, type, ...rest } = props;
  return (
    <Field name={name}>
      {(props) => {
        const { field, form, meta } = props;
        console.log(form);
        return (
          <TextField
            id={name}
            label={label}
            className={classes.textField}
            fullWidth
            type={type}
            margin="dense"
            {...field}
            error={meta.touched && !!meta.error}
            helperText={meta.touched && !!meta.error ? meta.error : ""}
            variant="outlined"
          />
        );
      }}
    </Field>
  );
}

export default Input;

import {
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { forwardRef } from "react";

const PREFIX = "LabelledTextField";

const classes = {
  inputFormRoot: `${PREFIX}-inputFormRoot`,
  inputLabelRoot: `${PREFIX}-inputLabelRoot`,
  inputLabelFormControl: `${PREFIX}-inputLabelFormControl`,
  outlinedInput: `${PREFIX}-outlinedInput`,
  notchedOutline: `${PREFIX}-notchedOutline`,
};

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  [`& .${classes.inputFormRoot}`]: {
    display: "flex",
  },

  [`& .${classes.inputLabelRoot}`]: {
    fontWeight: "400",
    fontSize: "14px",
    color: "#464E5F",
    lineHeight: "1.3125rem",
  },

  [`& .${classes.inputLabelFormControl}`]: {
    position: "static",
    transform: "inherit",
    textAlign: "left",
    marginBottom: theme.spacing(1),
  },

  [`& .${classes.notchedOutline}`]: {
    border: "none",
    width: "100%",
  },
  [`& .${classes.outlinedTextField}`]: {
    background: "#F3F6F9",
    fontSize: "14px",
    fontWeight: "400",
    color: "#464E5F",
    borderRadius: "6px",
    width: "100%",
    paddingRight: "0px",
  },
  [`& .${classes.outlinedInput}`]: {
    background: "#F3F6F9",
    fontSize: "14px",
    fontWeight: "400",
    color: "#464E5F",
    borderRadius: "6px",
    paddingRight: "0px",
    width: "calc(100%)",
  },
}));

const LabelledTextField = forwardRef((props, ref) => {
  const {
    label,
    variant,
    type,
    error,
    helperText,
    className,
    inputRef,
    required,
    fullWidth,
    size,
    disabled,
    ...restOfTextFieldProps
  } = props;

  return (
    <StyledFormControl
      classes={{
        root: classes.inputFormRoot,
      }}
      className={`${className} ${fullWidth ? "w-full" : ""} mui-textfield`}
    >
      <InputLabel
        required={required}
        classes={{
          root: classes.inputLabelRoot,
          formControl: classes.inputLabelFormControl,
        }}
        shrink
        disabled={disabled}
      >
        {label}
      </InputLabel>
      <TextField
        type={type}
        className={classes.outlinedInput}
        fullWidth={fullWidth}
        {...restOfTextFieldProps}
        inputRef={inputRef}
        size={size}
        disabled={disabled}
      />
      <FormHelperText error={Boolean(error)} margin="dense" variant={variant}>
        {helperText}
      </FormHelperText>
    </StyledFormControl>
  );
});

LabelledTextField.defaultProps = {
  label: "",
  variant: "outlined",
  ref: null,
  type: "text",
  error: false,
  helperText: "",
  className: null,
  inputRef: null,
  required: false,
  fullWidth: true,
  size: "medium",
  disabled: false,
};

export default LabelledTextField;

import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { forwardRef, useState } from "react";

const PREFIX = "LabelledTextFieldWithAdornments";

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

const LabelledTextFieldWithAdornments = forwardRef((props, ref) => {
  const {
    label,
    variant,
    type,
    startAdornment,
    endAdornment,
    error,
    helperText,
    className,
    inputRef,
    required,
    fullWidth,
    size,
    ...restOfTextFieldProps
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
      >
        {label}
      </InputLabel>
      <TextField
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        InputProps={{
          endAdornment: (
            <>
              {type === "password" ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleToggleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    size="large"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ) : endAdornment ? (
                endAdornment
              ) : null}
            </>
          ),
          startAdornment: startAdornment ? startAdornment : null,
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
        className={classes.outlinedInput}
        fullWidth={fullWidth}
        {...restOfTextFieldProps}
        inputRef={inputRef}
        size={size}
      />
      <FormHelperText error={Boolean(error)} margin="dense" variant={variant}>
        {helperText}
      </FormHelperText>
    </StyledFormControl>
  );
});

LabelledTextFieldWithAdornments.defaultProps = {
  label: "",
  variant: "outlined",
  ref: null,
  startAdornment: null,
  endAdornment: null,
  type: "text",
  error: false,
  helperText: "",
  className: null,
  inputRef: null,
  required: false,
  fullWidth: true,
  size: "medium",
};

export default LabelledTextFieldWithAdornments;

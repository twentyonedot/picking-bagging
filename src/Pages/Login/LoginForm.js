import React, { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LabelledTextFieldWithAdornments } from "Components";
import { PrimaryButton } from "Components/CustomButtons";

const userValidSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Please enter a valid email"),
  password: yup.string().required("Password is a required field"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    /* watch: loginFormCredentials, */
    formState: { errors },
    setFocus,
  } = useForm({ resolver: yupResolver(userValidSchema) });

  const { ref: refRegisterEmail, ...RegisterLoginEmail } = register("email");
  const { ref: refRegisterPassword, ...RegisterLoginPassword } =
    register("password");

  //useEffect
  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  //handlers
  const onSubmit = (data) => console.log("login-form-submit", data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
        <LabelledTextFieldWithAdornments
          label="Email"
          type="email"
          placeholder="demo@email.com"
          inputRef={refRegisterEmail}
          {...RegisterLoginEmail}
          error={Boolean(errors.email)}
          helperText={errors && errors.email && errors.email.message}
          autoComplete="email"
          className="pb-4"
        />
        <LabelledTextFieldWithAdornments
          label="Password"
          type="password"
          inputRef={refRegisterPassword}
          {...RegisterLoginPassword}
          error={Boolean(errors.password)}
          helperText={errors && errors.password && errors.password.message}
          autoComplete="password"
        />
        <div className="flex-center mt-12">
          <PrimaryButton
            variant="contained"
            type="submit"
            form="login-form"
            disableElevation
            className={`normal-case	w-1/2 rounded-md text-sm `}
          >
            Login
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

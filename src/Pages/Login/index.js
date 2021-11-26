import { Typography, Paper } from "@mui/material";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="flex-center-column h-screen">
      <Typography variant="h3">Picking and Bagging</Typography>
      <Paper elevation={6} className="px-16 py-20 mt-8">
        <LoginForm />
      </Paper>
    </div>
  );
};

export default Login;

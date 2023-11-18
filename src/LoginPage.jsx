import { Grid, Button } from "@mui/material";
import { setUserInfo } from "./store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const loginAsEmployee = (e) => {
    e.preventDefault();
    setUserInfo({ username: "employee", role: "employee" });
    navigate("/products");
  };
  const loginAsUser = (e) => {
    e.preventDefault();
    setUserInfo({ username: "user", role: "user" });
    navigate("/products");
  };
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item>
        <Button
          variant="contained"
          sx={{ m: "10px" }}
          onClick={loginAsEmployee}
        >
          As Employee
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" sx={{ m: "10px" }} onClick={loginAsUser}>
          As User
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

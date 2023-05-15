import {
  Button,
  InputAdornment,
  ListItemButton,
  TextField,
} from "@mui/material";
import { Container } from "../../components/Container";
import { styled } from "styled-components";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../../service/loginService";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #4158d0, #c850c0);
  height: 100vh;

  .form {
    display: flex;
    flex-direction: column;
    padding: 3rem;
    max-width: 20rem;
    gap: 1rem;
    width: 100%;
    background-color: white;
    border-radius: 15px;
    align-items: center;
  }
  .error {
    color: red;
  }
  .MuiFormControl-root {
    width: 100%;
  }
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "john@gmail.com",
      password: "john123",
    },
  });

  const handleClickSignIn = async (data) => {
    try {
      const response = await fetchLogin(data);
      const responseData = await response.json();
      if (responseData.token) {
        window.localStorage.setItem("token", responseData.token);
        navigate("/");
      } else {
        setErrorMsg(responseData.message);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  };

  return (
    <Container>
      <LoginWrapper>
        <div className="form">
          <h2>Sign In</h2>
          <TextField
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^\S+@\S+$/,
                message: "Email is not valid!",
              },
            })}
            label="Email"
            size="normal"
            error={errors.email ? true : false}
            helperText={errors.email?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdOutlineEmail />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            {...register("password", {
              required: "Password is required!",
            })}
            label="Password"
            type={showPassword ? "text" : "password"}
            size="normal"
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdLockOutline />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ListItemButton
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </ListItemButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            onClick={handleSubmit((data) => handleClickSignIn(data))}
            variant="text"
          >
            Sign In
          </Button>
          {errorMsg && <p className="error">{errorMsg}</p>}
        </div>
      </LoginWrapper>
    </Container>
  );
};

export default Login;

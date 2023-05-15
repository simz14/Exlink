import { Button, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";
import useUsers from "../../hooks/useUsers";
import dayjs from "dayjs";
import { useState } from "react";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container";
import { styled } from "styled-components";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../service/usersService";

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .form {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    gap: 1rem;
    background-color: ${({ theme }) => theme.trow};
    padding: 2rem;
    border-radius: 15px;
    align-items: center;
  }
  .MuiFormLabel-root,
  .MuiInputBase-root,
  svg {
    color: ${({ theme }) => theme.text};
  }
  .twoinone {
    display: flex;
    gap: 1rem;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  .avatar {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
  }
`;

const NewUser = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useUsers();
  const [avatar, setAvatar] = useState(null);
  const [dateValue, setDateValue] = useState(dayjs("05/14/2023 11:50 PM"));
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      address: "",
    },
  });

  const handleChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handeClickCreate = async () => {
    const formdata = new FormData();
    formdata.append("avatar", avatar);
    formdata.append("date", dayjs(dateValue).valueOf());

    Object.keys(getValues()).map((key) => {
      formdata.append(key, getValues(key));
    });

    try {
      const response = await createUser(formdata);
      const data = await response.json();

      if (data.id) {
        console.log(users);
        if (users) {
          setUsers((prev) => [...prev, data]);
        } else {
          setUsers([data]);
        }

        Swal.fire("Created", "", "success");
        navigate("/");
      } else {
        setErrorMsg(data.message.split(":")[1]);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  };

  return (
    <Layout>
      <Container>
        <FormWrapper>
          <div className="form">
            <div className="twoinone">
              <TextField
                {...register("name", { required: "Name is required!" })}
                label="Name"
                error={errors.name ? true : false}
                helperText={errors.name?.message}
              />
              <TextField
                {...register("surname", { required: "Surname is required!" })}
                label="Surname"
                error={errors.surname ? true : false}
                helperText={errors.surname?.message}
              />
            </div>
            <TextField
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is not valid",
                },
              })}
              label="Email"
              error={errors.email ? true : false}
              helperText={errors.email?.message}
              type="email"
            />

            <TextField {...register("address")} label="Address" />
            <TextField {...register("phone")} label="Phone" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                value={dateValue}
                onChange={(newValue) => setDateValue(newValue)}
                label="Date"
                error={errors.date ? true : false}
                helperText={errors.date?.message}
              />
            </LocalizationProvider>

            <Button variant="contained" component="label">
              Upload Image
              <input onChange={(e) => handleChange(e)} type="file" hidden />
            </Button>
            {avatar && (
              <img
                className="avatar"
                src={URL.createObjectURL(avatar)}
                alt="avatar"
              />
            )}

            <Button onClick={handleSubmit(handeClickCreate)}>Create</Button>
            {errorMsg && <p>{errorMsg}</p>}
          </div>
        </FormWrapper>
      </Container>
    </Layout>
  );
};

export default NewUser;

import { useNavigate, useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { Button, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";
import useUsers from "../../hooks/useUsers";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container";
import { styled } from "styled-components";
import Swal from "sweetalert2";
import { jwtData } from "../../utils/jwtData";

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .form {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    gap: 1rem;
    background-color: white;
    padding: 2rem;
    border-radius: 15px;
  }
  .twoinone {
    display: flex;
    gap: 1rem;
  }
  .MuiFormControl-root {
    width: 100%;
  }
`;
const UserDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setUsers } = useUsers();
  const { user } = useUser(id);
  const [errorMsg, setErrorMsg] = useState("");
  const [disable, setDisable] = useState(false);
  const [dateValue, setDateValue] = useState(
    user ? user.date : dayjs("05/14/2023 11:50 PM")
  );
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const token = async () => {
    const response = await jwtData(localStorage.getItem("token"));
    const data = await response;
    if (!data || data?.id != id) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  useEffect(() => {
    setDateValue(dayjs(user?.date));
    token();
  }, [user]);

  const handeClickEdit = () => {
    if (dateValue) {
      const { email, name, surname, phone, address } = getValues();
      const editedData = {
        id: Number(id),
        email,
        name: `${name} ${surname}`,
        phone,
        address,
        date: dayjs(dateValue).valueOf(),
      };
      setUsers((prev) =>
        prev.map((user) => {
          if (user.id == id) {
            return editedData;
          }
          return user;
        })
      );
      Swal.fire("Edited", "", "success");
      navigate("/");
    } else {
      setErrorMsg("Invalid Date");
    }
  };
  return (
    <Layout>
      <Container>
        <FormWrapper>
          {user && (
            <div className="form">
              <div className="twoinone">
                <TextField
                  {...register("name", { required: "Name is required!" })}
                  label="Name"
                  defaultValue={user?.name?.split(" ")[0]}
                  error={errors.name ? true : false}
                  helperText={errors.name?.message}
                  disabled={disable}
                />
                <TextField
                  {...register("surname", { required: "Surname is required!" })}
                  label="Surname"
                  defaultValue={user?.name?.split(" ")[1]}
                  error={errors.surname ? true : false}
                  helperText={errors.surname?.message}
                  disabled={disable}
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
                defaultValue={user?.email}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                type="email"
                disabled={disable}
              />

              <TextField
                {...register("address")}
                label="Address"
                defaultValue={user?.address}
                disabled={disable}
              />
              <TextField
                {...register("phone")}
                label="Phone"
                defaultValue={user?.phone}
                disabled={disable}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  required={true}
                  value={dateValue}
                  onChange={(newValue) => setDateValue(newValue)}
                  label="Date"
                  error={!dateValue ? true : false}
                  disabled={disable}
                />
              </LocalizationProvider>
              <Button disabled={disable} onClick={handleSubmit(handeClickEdit)}>
                Edit
              </Button>
              {errorMsg && <p>{errorMsg}</p>}
            </div>
          )}
        </FormWrapper>
      </Container>
    </Layout>
  );
};

export default UserDetail;

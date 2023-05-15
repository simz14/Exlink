import React from "react";
import styled from "styled-components";
import { CircularProgress, TableBody } from "@mui/material";
import { dateFormatterWhole } from "../../../utils/dateFormatter";
import UsersTableHead from "./TableHead";
import UserRow from "./TabaleRow";
import useUsers from "../../../hooks/useUsers";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  .table {
    overflow-x: auto;
    width: 97%;
    min-width: 350px;
    background-color: white;
    border-radius: 15px;
    margin: 1rem;
    padding: 1rem;
    .MuiTableHead-root {
      background-color: #36304a;
      color: white;
    }
  }
`;

const UsersTable = () => {
  const { users, loading } = useUsers();
  return (
    <StyledWrapper className="tablescreen">
      {loading ? (
        <CircularProgress />
      ) : (
        <table className="table">
          <UsersTableHead />
          <TableBody>
            {users?.map((item) => {
              return (
                <UserRow
                  key={item.id}
                  item={{ ...item, date: dateFormatterWhole(item.date) }}
                />
              );
            })}
          </TableBody>
        </table>
      )}
    </StyledWrapper>
  );
};

export default UsersTable;

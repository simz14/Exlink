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
  text-align: center;
  .table {
    overflow-x: auto;
    width: 97%;
    min-width: 350px;
    background-color: white;
    margin: 1rem;
    padding: 1rem;
    border-collapse: collapse;
    .MuiTableHead-root .MuiTableCell-root {
      background: ${({ theme }) => theme.thead};
      color: ${({ theme }) => theme.headerText};
    }
  }
  .infoText {
    width: 100%;
    background-color: transparent;
  }
`;

const UsersTable = () => {
  const { users, loading } = useUsers();
  console.log(users);
  return (
    <StyledWrapper className="tablescreen">
      {loading && <CircularProgress />}
      {users ? (
        <table className="table">
          <UsersTableHead />
          <TableBody>
            {users.map((item) => {
              return (
                <UserRow
                  key={item.id}
                  item={{ ...item, date: dateFormatterWhole(item.date) }}
                />
              );
            })}
          </TableBody>
        </table>
      ) : (
        <h2 className="infoText">There are no users yet</h2>
      )}
    </StyledWrapper>
  );
};

export default UsersTable;

import React, { useEffect, useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { jwtData } from "../../../utils/jwtData";

const StyledRow = styled(TableRow)`
  transition: 0.5s ease;
  background-color: ${({ theme }) => theme.trow};
  .MuiTableCell-root {
    color: ${({ theme }) => theme.text};
  }

  &:hover {
    transition: 0.5s ease;
    background-color: #b0a5d0;
    cursor: pointer;
  }
`;

const UserRow = ({ item }) => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const token = async () => {
    const response = await jwtData(localStorage.getItem("token"));
    const data = await response;
    if (!data) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  useEffect(() => {
    token();
  }, []);

  return (
    <StyledRow onClick={() => !disable && navigate(`user/${item.id}`)}>
      <TableCell>{item?.name}</TableCell>
      <TableCell>{item?.address}</TableCell>
      <TableCell>{item?.date}</TableCell>
    </StyledRow>
  );
};
UserRow.propTypes = {
  item: PropTypes.object,
};
export default UserRow;

import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledRow = styled(TableRow)`
  transition: 0.5s ease;
  &:hover {
    transition: 0.5s ease;
    background-color: #b0a5d0;
    cursor: pointer;
  }
`;

const UserRow = ({ item }) => {
  const navigate = useNavigate();
  return (
    <StyledRow onClick={() => navigate(`user/${item.id}`)}>
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

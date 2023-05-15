import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const UserRow = ({ item }) => {
  const navigate = useNavigate();
  return (
    <TableRow onClick={() => navigate(`user/${item.id}`)}>
      <TableCell>{item?.name}</TableCell>
      <TableCell>{item?.address}</TableCell>
      <TableCell>{item?.date}</TableCell>
    </TableRow>
  );
};
UserRow.propTypes = {
  item: PropTypes.object,
};
export default UserRow;

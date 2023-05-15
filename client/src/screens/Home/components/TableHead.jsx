import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const UsersTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Date</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default UsersTableHead;

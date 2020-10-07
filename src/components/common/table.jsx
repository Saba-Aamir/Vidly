import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Table from "react-bootstrap/Table";

const StyledTable = ({ columns, sortColumn, onSort, data }) => {
  return (
    <Table bordered hover>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </Table>
  );
};

export default StyledTable;

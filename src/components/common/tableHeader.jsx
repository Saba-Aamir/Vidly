import React, { Component } from "react";

class TableHeader extends Component {
  //We put the responsibility of determining the sort order here,
  //so if we reuse a table in multiple places, we won't duplicate this logic.
  raiseSort = (path) => {
    //Copy the sortColumn object into a new one.
    const sortColumn = { ...this.props.sortColumn };
    //Check if path is same, we toggle asc and desc sort order.
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      //We update both path and order
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    //Object destructuring to clean up the code.
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <i className="material-icons">keyboard_arrow_up</i>;
    return <i className="material-icons">keyboard_arrow_down</i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

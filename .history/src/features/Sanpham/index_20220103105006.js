import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function Sanpham() {
  return (
    <div>
      <h1>San phẩm</h1>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

      <p>dsadjashdjsahdjsah</p>
    </div>
  );
}

export default Sanpham;

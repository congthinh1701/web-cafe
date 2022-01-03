import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function Sanpham() {
  return (
    <div>
      <h1>San phẩm</h1>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <p>dsadjashdjsahdjsah</p>
    </div>
  );
}

export default Sanpham;

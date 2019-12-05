import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export const UserOptions: React.FC<any> = (props: any) => {
  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <Link to="/createCouch">
            <a className="nav-link" href="#">Create Couch</a>
          </Link>
        </div>
        <div className="col">
          <Link to="/login">
            <a className="nav-link" href="#">Login</a>
          </Link>
        </div>
        <div className="col">
          <Link to="/login">
            <a className="nav-link" href="#">Logout</a>
          </Link>
        </div>
      </div>
      {/* <Dropdown isOpen={props.dropdownOpen} toggle={props.toggle}>
          <DropdownToggle caret>{props.username}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Create Listing</DropdownItem>
            <DropdownItem>divider</DropdownItem>
            <DropdownItem>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}

    </>
  )
}
export default UserOptions;
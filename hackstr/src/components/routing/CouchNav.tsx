import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavItem,
  Button
} from "reactstrap";
import UserOptions from "./UserOptions";
import { Link } from "react-router-dom";

export const CouchNav: React.FC<any> = (props: any) => {
  // const username = 'user';
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Navbar>
          <Link to="">
            <img style={props.iconStyle} alt='this is an image' />
          </Link>
          {props.username !=='' ? (
            <Button>Sign in</Button>
          ) : (
            <UserOptions dropDownOpen={dropdownOpen} toggle={toggle} />
          )}
      </Navbar>
    </div>
  );
};

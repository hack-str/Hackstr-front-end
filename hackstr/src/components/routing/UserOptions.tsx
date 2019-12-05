import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const UserOptions:React.FC<any>=(props:any)=>{
    return (
        <>
        <Dropdown isOpen={props.dropdownOpen} toggle={props.toggle}>
          <DropdownToggle caret>{props.username}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Create Listing</DropdownItem>
            <DropdownItem>divider</DropdownItem>
            <DropdownItem>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      
      </>
    )
}
export default UserOptions;
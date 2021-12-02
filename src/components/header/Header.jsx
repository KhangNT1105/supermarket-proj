import React, { useState } from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
  Collapse,
  NavLink,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='header'>
      <div className='header__wrapper container'>
        <div>
          <Navbar color='light' expand='md' light>
            <NavbarBrand href='/'>Logo</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen}>
              <Nav className='me-auto' navbar>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    DANH MỤC SẢN PHẨM
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink to='/components/'>Trang chủ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/components/'>Giới thiệu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/components/'>Bảng báo giá</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/components/'>Khuyến mãi</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/components/'>Chế biến</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/components/'>Thực đơn</NavLink>
                </NavItem>
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Header;

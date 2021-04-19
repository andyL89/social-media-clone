import React from 'react';
import styled from 'styled-components';
import Button from '../defaults/Button';
import Search from '../defaults/Search';

const Navbar = styled.div`
  padding: 5px 15px;
  height: 45px;
  background-color: rgb(0, 231, 231);
`
const StyledButton = styled(Button)`
  padding: 5px;
  margin-right: 5px;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    transition: .2s;
  }
`

const StyledSearch = styled(Search)`
  float: right;
  padding: 5px;
  border: 2px solid white;
  border-radius: 5px;
`

const Header = () => (
  <Navbar>
    <StyledButton text={"Home"} />
    <StyledButton text={"Notifications"} />
    <StyledButton text={"Messages"} />
    <StyledSearch placeholder={"Search"}/>
  </Navbar>
)


export default Header;
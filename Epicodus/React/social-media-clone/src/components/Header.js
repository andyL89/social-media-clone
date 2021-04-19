import React from 'react';
import styled from 'styled-components';
import Button from './Button'

const Navbar = styled.div`
  padding: 5px 15px;
  background-color: black;
`
const StyledButton = styled(Button)`
  padding: 5px;
  margin-right: 5px;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  border-radius: 5px;
`

const Header = () => (
  <Navbar>
    <StyledButton text={"Home"} />
    <StyledButton text={"Notifications"} />
    <StyledButton text={"Messages"} />
  </Navbar>
)


export default Header;
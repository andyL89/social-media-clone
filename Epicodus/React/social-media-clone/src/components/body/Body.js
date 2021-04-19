import React from 'react';
import styled from 'styled-components';
import User from './User'
import Feed from '../feed/Feed'


const PageSetup = styled.div`
  width: 90%;
  height: calc(100% - 45px);
  display: flex;
  margin-left: auto;
  margin-right: auto;
`

const Body = () => {
  return (
    <PageSetup>
      <User />
      <Feed />
    </PageSetup>
  )
}

export default Body;
import React from 'react'
import styled from 'styled-components'
import Post from './post';
import {feedMock} from './mock'

const FeedMock = styled.div`
  padding: 5px;
  & > div {
    border: 2px solid black;
    padding: 20px;
    background-color: white;
    margin-bottom: 5px;
    & > div {
      margin-bottom: 5px;
    }
  }
`

const Feed = () => {
  return (
    <FeedMock>
      {feedMock.map(post => <Post post={post} />)}
    </FeedMock>
  )
}

export default Feed;
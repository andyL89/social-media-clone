import React from 'react'
import styled from 'styled-components'
import Post from './post';
import {feedMock} from './mock'

const FeedMock = styled.div`
  
`

const Feed = () => {
  return (
    <FeedMock>
      {feedMock.map(post => <Post post={post} />)}
    </FeedMock>
  )
}

export default Feed;
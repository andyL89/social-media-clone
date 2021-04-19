import React from 'react'
import styled from 'styled-components'

const Posting = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
`
const Info = styled.div`
  padding: 2px;
`

const Post = (props) => (
  <Posting>
    <div>
      Posted {props.post.postedAt}
    </div>
    <div>
      By: {props.post.postedBy}
    </div>
    <div>
      {props.post.body}
    </div>
  </Posting>
)


export default Post;
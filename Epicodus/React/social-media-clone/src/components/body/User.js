import React from 'react'
import styled from 'styled-components'
import dogPhoto from '../../img/doggo.jpg';

const UserCard = styled.div`
  background-color: ${({backgroundColor}) => backgroundColor};
  height: 50%;
  display: flex;
  align-items: center;
  padding: 25px 60px;

  img {
    border-radius: 50%;
    border: 2px solid black;
    filter: sepia(100%);
    width: 50%;
    height: auto;
    object-fit: cover;
  }
`
const UserInfo = styled.div`
  height: 100%;
  padding: 30px 10px;
`

const Title = styled.div`
  display: flex;
  padding: 2px 1px;
  font-weight: 900;
`
const Info = styled.div`
  font-family: 'Antonio', sans-serif;
  padding-left: 5px;
  font-weight: 400;
`
const About = styled.div`
  font-family: 'Antonio', sans-serif;
  font-size: 30px;
`

const User = () => {
  return (
    <UserCard backgroundColor={'white'}>
      <img src={dogPhoto} alt="dog" />
      <UserInfo>
        <Title>
          Name: <Info>Zap</Info>
        </Title>
        <Title>
          Age: <Info>13</Info>
        </Title>
        <Title>
          Breed: <Info>Huskie</Info>
        </Title>
        <Title>
          Favorite Activity: <Info>Howling</Info>
        </Title>
        <Title>
          Pet Peeves: <Info>Cats</Info>
        </Title>
        <About>
          Ever Since I was a pup I ate my applejacks. TTHEEYYREE GREAT! BARK BARK.
        </About>
      </UserInfo>
    </UserCard>
  )
}

export default User;
import styled from '@emotion/styled'
import type { NextPage } from 'next'

const StyledContainer = styled.div`
width: 100vw;
height: 100vh;
display: grid;
place-items: center;
`

const Home: NextPage = () => {
  return (
    <StyledContainer>
      <h1 data-testid="heading-test">Hello World.</h1>
    </StyledContainer>
  )
}

export default Home

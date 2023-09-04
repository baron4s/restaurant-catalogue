import styled, { keyframes } from 'styled-components'
import cover from '../../assets/images/3.jpg'
import slideShow1 from '../../assets/images/6.jpg'
import slideShow2 from '../../assets/images/7.jpg'

const slideSow = keyframes`
0% {
  background-image: url(${cover.src});
}
33.33% {
  background-image: url(${slideShow1.src});
}
66.66%{
  background-image: url(${slideShow2.src});
}
100%{
  background-image: url(${cover});
}
`

const CoverContainer = styled.div`
  height: 100vh;
  background-image: url(${cover.src});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 0;
  color: #ffff;
  animation: ${slideSow} 10s infinite ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(150, 100, 50, 0.3) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }

  .top {
    text-align: center;
    z-index: 2;
    & span {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
    }
    & h1 {
      font-family: 'Satisfy', cursive;
      font-size: 40px;
      margin-top: 12px;
    }
  }

  .detail {
    z-index: 1;
    text-align: center;
    padding: 0 14px;
    & > p {
      font-size: 14px;
      font-family: 'Inter', sans-serif;
    }
    & h4 {
      margin: 10px 0;
    }
  }
`

export default CoverContainer

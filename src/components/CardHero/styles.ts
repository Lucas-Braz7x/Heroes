import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  width: 300px;
  height: 300px;
  border-radius: 30px;
  box-shadow: 0 0 20px #D5d5d5;

  position: relative;
  transition: .5s;

  &:hover{
    transform: rotateY(180deg);
  }
`

export const Heart = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`

export const ImageCharacter = styled.img`
  border-radius: 30px;
  width: 150px;
  height: 150px;
`;

export const CardHover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  opacity: 0;
  transition: .2s .5s;
  &:hover{
    background: #fff;
    opacity: 1;
  }
`;
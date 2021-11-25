import styled from 'styled-components';

export const HeaderHome = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #F8F8FF;
  box-shadow: 0 0 30px #DCDCDC;
`;

export const Navigate = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Logo = styled.div`
  font-family: 'Secular One', sans-serif , monospace;
  font-size: 2rem;
  font-weight: bold;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const InputSearch = styled.input`
  width: 150px;
  outline: none;
  border: 2px solid #DCDCDC;
  border-radius: 50px;
`;
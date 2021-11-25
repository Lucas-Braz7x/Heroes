import {
  Logo,
  Navigate,
  HeaderHome,
  SearchWrapper,
  InputSearch
} from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import Modal from '../../Modal';


export const Header = () => {
  const [inputActive, setInputActive] = useState(false);
  const [modalMenuActive, setModalMenuActive] = useState(false);

  const handleActiveInput = () => {
    setInputActive(!inputActive);
  }
  const handleModalMenu = () => {
    setModalMenuActive(!modalMenuActive);
  }
  return (
    <HeaderHome>
      <Navigate>
        <GiHamburgerMenu onClick={handleModalMenu} />
        {modalMenuActive && <Modal props={handleModalMenu} />}
        <Logo>Heroes</Logo>
        <SearchWrapper>
          <FiSearch onClick={handleActiveInput} />
          {inputActive && <InputSearch type="search" placeholder="Digite a sua pesquisa" />}
        </SearchWrapper>
      </Navigate>
    </HeaderHome>
  )
}
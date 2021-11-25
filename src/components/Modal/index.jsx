import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Container, MenuNavigate } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';

/* Portais necessitam de dois parâmetros 1-component 2-local de despejo  */
const portalElements = document.getElementById('modal');

const Modal = ({ props }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Container>
          <MenuNavigate>
            <GiHamburgerMenu onClick={props} />
            <h1>Menu </h1>
          </ MenuNavigate>
        </Container>
        , portalElements)}
    </Fragment>
  )
};

export default Modal;
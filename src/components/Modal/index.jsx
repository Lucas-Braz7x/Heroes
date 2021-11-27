import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Container, MenuNavigate } from './styles';
import { AiOutlineClose } from 'react-icons/ai';

/* Portais necessitam de dois parâmetros 1-component 2-local de despejo  */
const portalElements = document.getElementById('modal');

const Modal = ({ props }) => {
  const overlays = document.querySelector('#overlays');
  overlays.addEventListener('click', (e) => {
    if (e.target === this) console.log('Clicou');
  });
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Container>
          <MenuNavigate>
            <AiOutlineClose onClick={props} />
            <h1>Menu </h1>
          </ MenuNavigate>
        </Container>
        , portalElements)}
    </Fragment>
  )
};

export default Modal;
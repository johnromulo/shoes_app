import React from 'react';

import logo from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Shoes" />

      <Cart>
        <span> Teste </span>
      </Cart>
    </Container>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './index.module.css';
const Header = (props) => {
  return (
    <header className={Styles.header}>
      <div><Link to='/employees'>Inicio</Link></div>
      <div> <h1>Gerenciar Funcionários</h1></div>
      <div></div>
    </header>
  )
}
export default Header;

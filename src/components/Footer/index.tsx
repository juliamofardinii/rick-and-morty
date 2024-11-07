// Footer.js
import React from 'react';
import style from './index.module.scss'; // Importando o módulo SCSS

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p>© 2024 Projeto Utilizando API Rick and Morty</p>
      </div>
    </footer>
  );
};

export default Footer;


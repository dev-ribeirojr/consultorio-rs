import './header.css';
import { useState } from 'react';

import Logo from '../../assets/img/logo.jpg';

import IconeMenuAberto from '../../assets/img/menu-aberto.png';
import IconeMenuFechado from '../../assets/img/menu-fechado.png';

export default function Header() {
  const [menu, setMenu] = useState(window.innerWidth >= 768 ? true : false);

  function fecharBalao() {
    const largura = window.innerWidth;
    if (largura <= 768) {
      setMenu(false);
    }
  }
  function mudouTamanho() {
    const largura = window.innerWidth;
    if (largura >= 768) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }
  document.body.onresize = () => mudouTamanho();

  return (
    <header className='header-principal'>
      <section className='header'>
        <img
          data-aos='fade-right'
          data-aos-duration='1200'
          src={Logo}
          alt='logo'
          className='logo'
        />

        <img
          data-aos='fade-left'
          data-aos-duration='1200'
          src={menu ? IconeMenuAberto : IconeMenuFechado}
          className='icone-menu'
          onClick={() => setMenu(!menu)}
        />
        {
          menu &&
          <nav className='navegar'>
            <section className='icone-msg'></section>
            <a
              href='#sobre'
              onClick={fecharBalao}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Início
            </a>
            <a
              href='#agendamento'
              onClick={fecharBalao}
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Agendamento
            </a>
            <a
              href='#servicosBorda'
              onClick={fecharBalao}
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Serviços
            </a>
            <a
              href='#formacaoBorda'
              onClick={fecharBalao}
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Formação
            </a>
          </nav>
        }
      </section>
      <section className='header-bordas'>
        <section>
          <div
            data-aos="fade-right"
            data-aos-duration='1500'
            className='primeira-borda'
          ></div>
          <div
            data-aos="fade-right"
            data-aos-duration='1500'
            data-aos-delay='200'
            className='segunda-borda'
          ></div>
        </section>
        <section className='right'>
          <div
            data-aos="fade-left"
            data-aos-duration='1500'
            data-aos-delay='200'
            className='segunda-borda'
          ></div>
          <div
            data-aos="fade-left"
            data-aos-duration='1500'
            className='primeira-borda'
          ></div>
        </section>
      </section>

    </header>
  )
}
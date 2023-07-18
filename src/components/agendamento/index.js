import './agendamento.css';

import LogoEscrita from '../../assets/svg/logo-escrita.svg';
import Titulo from '../titulo';
import Carousel from '../carousel';

export default function Agendamento() {
  return (
    <section id='agendamento'>
      <img
        data-aos='zoom-in'
        data-aos-duration='1200'
        src={LogoEscrita}
        alt='logo'
        className='logo'
      />
      <Titulo texto={'Agendamento'} />
      <section className='area-horario'>
        <p
          data-aos="fade-right"
          data-aos-duration='1200'
        >
          Segunda a Sexta de 08:00 ás 18:00
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration='1200'
          data-aos-delay='100'
        >
          Sábado de 08:00 ás 12:00
        </p>
        <div
          data-aos="fade-right"
          data-aos-duration='1200'
          className='borda'
        ></div>
      </section>
      <Carousel />
      <section
        data-aos="zoom-in"
        data-aos-duration='1200'
      >
        <a
          href='https://contate.me/consultoriors'
          target='_blank'
        >
          Agendar Horário
        </a>

      </section>
      <div
        id='servicosBorda'
        className='borda-secao'
      ></div>
    </section>
  )
}
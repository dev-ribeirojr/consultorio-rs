import './sobre.css';

import Dente from '../../assets/img/dente-limpo.png';
import Localizacao from '../../assets/img/locale.png';
import ImgDrRaphael from '../../assets/img/dr-raphael.png';

import {
  FaWhatsapp,
  FaInstagram,
  FaLink
} from 'react-icons/fa';

export default function Sobre() {
  return (
    <section id="sobre">
      <section className='sobre'>
        <section className='area-texto'>
          <h1
            data-aos="zoom-in"
            data-aos-duration='1200'
            className='titulo'
          >
            (Dr). Raphael Rodrigues Dos Santos.
          </h1>
          <section>
            <img
              data-aos="fade-right"
              data-aos-duration='1200'
              src={Dente} alt='icone dente'
            />
            <p
              data-aos="zoom-in"
              data-aos-duration='1000'
              data-aos-delay='100'
            >
              O custo do cuidado é sempre menor do que o custo do reparo, venha fazer a sua avaliação com a nossa equipe do consultório odontológico RS e melhorar a sua autoestima.
            </p>
          </section>

          <section>
            <img
              data-aos="fade-right"
              data-aos-duration='1200'
              data-aos-delay='200'
              src={Localizacao}
              alt='icone localização'
            />
            <p
              data-aos="zoom-in"
              data-aos-duration='1000'
              data-aos-delay='200'
            >
              Rua Prefeito Augusto Figuereido | N° 31
              Centro | São José do Divino
            </p>
          </section>
          <section className='area-contato'>
            <section>
              <FaInstagram
                data-aos="fade-up"
                data-aos-duration='1000'
              />
              <a
                data-aos="fade-up"
                data-aos-duration='1200'
                data-aos-delay='200'
                href='https://www.instagram.com/dr.raphaelrodrigues/' target='_blank'
              >
                @dr.raphaelrodrigues
                <FaLink />
              </a>
            </section>
            <section>
              <FaWhatsapp
                data-aos="fade-up"
                data-aos-duration='1000'
                data-aos-delay='300'
              />
              <a
                data-aos="fade-up"
                data-aos-duration='1200'
                data-aos-delay='400'
                href='https://contate.me/consultoriors'
                target='_blank'
              >
                (33) 98861-7487
                <FaLink />
              </a>
            </section>
          </section>
        </section>
        <section className='area-imagens-dr'>
          <img
            data-aos="fade-left"
            data-aos-duration='2000'
            src={ImgDrRaphael}
            alt="imagen DR. Raphael"
            className='imgDr'
          />
        </section>
      </section>

    </section>
  )
}
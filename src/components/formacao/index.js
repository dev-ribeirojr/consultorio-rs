import './formacao.css';
import ImgPerfil from '../../assets/img/perfil.png';
import Titulo from '../titulo';

export default function Formacao() {
    return (
        <section id='formacao'>
            <Titulo texto={'Formação'} />
            <section className='area-formacao'>
                <section
                    className='area-img'
                    data-aos="flip-left"
                    data-aos-duration='1200'
                >
                    <img src={ImgPerfil} alt='imagen perfil' />
                </section>
                <section className='area-texto'>
                    <h1
                        data-aos="fade-up"
                        data-aos-duration='1200'
                    >
                        Unidoctum
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-duration='1200'
                        data-aos-delay='100'
                    >
                        Formado na Unidoctum de Teófilo Otoni em 2022, realizando pós graduação na área de implantodontia na Funorte de Governador Valadares.
                    </p>
                </section>
            </section>
            <div
                className='borda-secao'
            ></div>
        </section>
    )
}
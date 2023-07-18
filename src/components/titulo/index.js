import './titulo.css';
import { FaStarHalfAlt } from 'react-icons/fa';

export default function Titulo({ texto }) {

    return (
        <section className="area-titulo">
            <section className='content-titulo'>
                <div
                    data-aos="fade-right"
                    data-aos-duration='1200'
                    className="border-left"
                ></div>
                <section className='titulo'>
                    <section
                        data-aos="fade-left"
                        data-aos-duration='1200'
                    >
                        <FaStarHalfAlt />
                    </section>
                    <section
                        data-aos="fade-left"
                        data-aos-duration='1200'
                        data-aos-delay='200'
                    >
                        <FaStarHalfAlt />
                    </section>
                    <h1
                        data-aos="zoom-in"
                        data-aos-duration='1200'
                    >{texto}</h1>
                    <section
                        data-aos="fade-right"
                        data-aos-duration='1200'
                        data-aos-delay='200'
                    >
                        <FaStarHalfAlt />
                    </section>
                    <section
                        data-aos="fade-right"
                        data-aos-duration='1200'
                    >
                        <FaStarHalfAlt />
                    </section>


                </section>
                <div
                    data-aos="fade-left"
                    data-aos-duration='1200'
                    className="border-right"
                ></div>
            </section>

        </section>
    )
}
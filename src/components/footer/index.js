import './footer.css';
import {
    FaLink
} from 'react-icons/fa';
export default function Footer() {
    return (
        <footer className='footer'>
            <section>
                <p>Consultório Odontológico</p>
                <a href='https://www.linkedin.com/in/pablo-alves-629bba245/' target='_blank'>Desenvolvido por Pablo Alves
                    <FaLink />
                </a>
            </section>
            <div className='borda-secao'></div>
            <div className='borda-footer'></div>
        </footer>
    )
}
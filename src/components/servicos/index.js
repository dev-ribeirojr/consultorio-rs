import { useState } from 'react';
import './servicos.css';
import Titulo from "../titulo";

// Import das Imagens 

import Aparelho from '../../assets/icones/servicos/aparelho.png';
import Canal from '../../assets/icones/servicos/canal.png';
import Clareamento from '../../assets/icones/servicos/clareamento.png';
import Implante from '../../assets/icones/servicos/implante.png';
import Limpeza from '../../assets/icones/servicos/limpeza.png';
import Protese from '../../assets/icones/servicos/protese.png';
import Reconstrucao from '../../assets/icones/servicos/reconstrucao.png';
import Siso from '../../assets/icones/servicos/siso.png';

export default function Servicos() {

    const [listaServicos, setListasServicos] = useState([
        { id: 1, src: Aparelho, alt: 'icone aparelho', servico: 'Ortodontia (aparelhos)' },
        { id: 2, src: Canal, alt: 'icone canal', servico: 'Tratamento de Canal' },
        { id: 3, src: Clareamento, alt: 'icone clareamento', servico: 'Clareamento Dentário' },
        { id: 4, src: Implante, alt: 'icone implante', servico: 'Implantes' },
        { id: 5, src: Limpeza, alt: 'icone limpesa', servico: 'Limpeza' },
        { id: 6, src: Protese, alt: 'icone protese', servico: 'Prótese Fixa e Removível' },
        { id: 7, src: Reconstrucao, alt: 'icone restauracao', servico: 'Restauração' },
        { id: 8, src: Siso, alt: 'icone siso', servico: 'Cirurgia de Siso' },
    ])

    return (
        <section id='servicos'>
            <Titulo texto={'Serviços'} />
            <section className='area-cards-servicos'
                data-aos="fade-up"
                data-aos-duration='1200'
            >
                {listaServicos.map((servico) => (
                    <section
                        key={servico.id}
                        className='card-servico'
                    >
                        <div>
                            <img src={servico.src} alt={servico.alt} />
                        </div>
                        <p>{servico.servico}</p>
                    </section>
                ))}
            </section>
            <div
                className='borda-secao'
                id='formacaoBorda'
            ></div>
        </section>
    )
}
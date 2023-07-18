import Sobre from "../../components/sobre";
import Agendamento from "../../components/agendamento";
import Servicos from '../../components/servicos';
import Formacao from '../../components/formacao';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <section className="home">
      <Sobre />
      <Agendamento />
      <Servicos />
      <Formacao />
      <Footer />
    </section>
  )
}
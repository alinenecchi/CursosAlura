import Card from "../componentes/card/index";
import Formulario from "../componentes/form/Form";
import ListaParticipantes from "../componentes/listaParticipante/ListaParticipantes";
import Rodape from "../componentes/rodape/index";

const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};

export default Configuracao;

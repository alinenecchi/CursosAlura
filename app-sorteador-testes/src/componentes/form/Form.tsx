import { useRef } from "react";
import { useState } from "react";
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante";

const Form = () => {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLFormElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };

  return (
    <>
      <form onSubmit={adicionarParticipante}>
        <input
          ref={inputRef}
          value={nome}
          type="text"
          placeholder="Insira os nomes dos participantes"
          onChange={(event) => setNome(event.target.value)}
        />
        <button disabled={!nome}>Adicionar</button>
      </form>
    </>
  );
};

export default Form;

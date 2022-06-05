import { useRef } from "react";
import { useState } from "react";
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante";
import { useMessageError } from "../../state/hook/userMessageError";

const Form = () => {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLFormElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const messageError = useMessageError();

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
        {messageError && <p role={'alert'}>{messageError}</p>}
      </form>
    </>
  );
};

export default Form;

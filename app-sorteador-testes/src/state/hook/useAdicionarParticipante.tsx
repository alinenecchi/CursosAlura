import { useSetRecoilState, useRecoilValue } from "recoil";
import { errorState, listaParticipantesState } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const list = useRecoilValue(listaParticipantesState);
  const setError = useSetRecoilState(errorState);
  return (nomeDoParticipante: string) => {
    if (list.includes(nomeDoParticipante)) {
      setError('Nomes duplicados não são permitidos!')
      return
    }
    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};

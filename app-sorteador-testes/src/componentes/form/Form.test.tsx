import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { RecoilRoot } from "recoil";

test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(<Form />);
  //encontrar no DOM o input
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  //encontrar o botão
  const botao = screen.getByRole("button");
  //garantir que o input esteja no ducumento
  expect(input).toBeInTheDocument();
  //garantir que o botão esteja desabilitado
  expect(botao).toBeDisabled();
});

test("Adicionar participante caso tenha um nome preenchido", () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );
  //encontrar no DOM o input
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  //encontrar o botão
  const botao = screen.getByRole("button");

  //inserir um valor no input
  fireEvent.change(input, { target: { value: "Ana" } });
  //clicar no botão de submeter
  fireEvent.click(botao);
  //garantir que o input esteja com o foco ativo
  expect(input).toHaveFocus();
  //garantir que o input não tenha um valor
  expect(input).toHaveValue("");
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { setUncaughtExceptionCaptureCallback } from "process";

test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {

    render(<Formulario/>);

    //encontrar no DOM o input 
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    //encontrar o botão 
    const botao = screen.getByRole('button');
    //garantir que o input esteja no ducumento
    expect(input).toBeInTheDocument();
    //garantir que o botão esteja desabilitado
    setUncaughtExceptionCaptureCallback(botao).toBeDisabled();
});
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuracao from './pages/configuracao';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao />}></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { RecoilRoot } from "recoil";
import Form from './componentes/form/Form';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={Form}></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

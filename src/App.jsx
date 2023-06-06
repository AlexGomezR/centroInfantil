import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import { Home } from "./views/Home/Home";
import { CovidView } from "./views/CovidView/CovidView";
import QueOfrecemos from "./views/QueOfrecemos/QueOfrecemos";
import Matricula from "./views/Matricula/Matricula";
import { ActividadesView } from "./views/ActividadesView/ActividadesView";
import { HorariosView } from "./views/HorariosView/HorariosView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="inicio" element={<Home />} />
          <Route path="ofrecemos" element={<QueOfrecemos />} />
          <Route path="covid" element={<CovidView />} />
          <Route path="matricula" element={<Matricula />} />
          <Route path="actividades" element={<ActividadesView />} />
          <Route path="horarios" element={<HorariosView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

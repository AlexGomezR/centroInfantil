import { Cabecera } from "../../components/Cabecera/Cabecera";
import horariosCabecera from "../../../public/Imagenes/horarios/cabecera.jpg";
import { Horarios } from "../../components/Horarios/Horarios";

export function HorariosView() {
  return (
    <>
      <Cabecera imagen={horariosCabecera} />
      <Horarios />
    </>
  );
}

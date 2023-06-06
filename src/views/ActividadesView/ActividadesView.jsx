import { Cabecera } from "../../components/Cabecera/Cabecera";
import actividadesCabecera from "../../../public/Imagenes/actividades/cabecera.jpg";
import { Actividades } from "../../components/Actividades/Actividades";

export function ActividadesView() {
  return (
    <>
      <Cabecera imagen={actividadesCabecera} />
      <Actividades />
    </>
  );
}

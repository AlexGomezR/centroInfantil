import horario from "../../../public/Imagenes/Horarios/img1.jpg";
import "./Horarios.css";
export function Horarios() {
  return (
    <>
      <div className="contenedor">
        <img className="z-n1" src={horario} alt="cabecera" title="Horario" />
        <p className="texto-marron pb-3 texto d-flex">
          <h3 className="texto-marron mb-4 text-center">
            <b>Calendario y horarios escolares</b>
          </h3>
        </p>
      </div>
    </>
  );
}

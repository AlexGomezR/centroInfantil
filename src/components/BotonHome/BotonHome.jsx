import { Link } from "react-router-dom";
import "./BotonHome.css";

export function BotonHome({ texto, clase, icono, direccion }) {
  return (
    <div className="d-flex ">
      <Link to={direccion}
        className={`${clase} gap-2 p-3 border-0 text-decoration-none text-white custom-rounded btn-rebote`}
      >
        <img src={icono} /> {texto}
      </Link>
    </div>
  );
}

import { ActividadesImg } from "../ActividadesImg/ActividadesImg";
import img1 from "../../../public/Imagenes/Actividades/img-1.jpg";
import img2 from "../../../public/Imagenes/Actividades/img-2.jpg";
import img3 from "../../../public/Imagenes/Actividades/img-3.jpg";
import img4 from "../../../public/Imagenes/Actividades/img-4.jpg";
import img5 from "../../../public/Imagenes/Actividades/img-5.jpg";
import img6 from "../../../public/Imagenes/Actividades/img-6.jpg";
import img7 from "../../../public/Imagenes/Actividades/img-7.jpg";
import img8 from "../../../public/Imagenes/Actividades/img-8.jpg";
import img9 from "../../../public/Imagenes/Actividades/img-9.jpg";
import img10 from "../../../public/Imagenes/Actividades/img-10.jpg";
import img11 from "../../../public/Imagenes/Actividades/img-11.jpg";
export function Actividades() {
  return (
    <>
      <p className="texto-marron pb-3 ">
        <h3 className="texto-marron mb-4 text-center">
          <b>Nuestras actividades diarias</b>
        </h3>
      </p>
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="col d-flex flex-column justify-content-center gap-3">
            <ActividadesImg imagen={img1} nombre={"Actividad 1"} />
            <ActividadesImg imagen={img2} nombre={"Actividad 2"} />
            <ActividadesImg imagen={img3} nombre={"Actividad 3"} />
          </div>
          <div className="col d-flex flex-column justify-content-center gap-3">
            <ActividadesImg imagen={img4} nombre={"Actividad 4"} />
            <ActividadesImg imagen={img5} nombre={"Actividad 5"} />
          </div>
          <div className="col d-flex flex-column justify-content-center gap-3">
            <ActividadesImg imagen={img6} nombre={"Actividad 6"} />
            <ActividadesImg imagen={img7} nombre={"Actividad 7"} />
            <ActividadesImg imagen={img8} nombre={"Actividad 8"} />
          </div>
          <div className="col d-flex flex-column justify-content-center gap-3">
            <ActividadesImg imagen={img9} nombre={"Actividad 9"} />
            <ActividadesImg imagen={img10} nombre={"Actividad 10"} />
            <ActividadesImg imagen={img11} nombre={"Actividad 11"} />
          </div>
        </div>
      </div>
    </>
  );
}

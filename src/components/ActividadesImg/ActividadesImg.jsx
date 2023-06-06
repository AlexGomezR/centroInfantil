export function ActividadesImg({ imagen, nombre }) {
  return (
    <>
      <img
        className="img-fluid rounded-3"
        src={imagen}
        alt="cabecera"
        title={nombre}
        width={"150px"}
      />
    </>
  );
}

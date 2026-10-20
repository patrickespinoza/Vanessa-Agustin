import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import ImagenFinal from "./componentes-encabezado/Final";
import Novios from "./componentes-encabezado/novios";

export default function PaginaPrincipal() {

  return (
    <div>

      <Novios/>

      <Celebracion/>

      <Vestimenta />

      <Intinerario2/>

      <ConfirmacionAsistencia/>

      <ImagenFinal/>
    </div>
  );
}
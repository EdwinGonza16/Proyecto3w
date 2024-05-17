import React, { useEffect, useState } from "react";
import "./eventos.css";

export const Eventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const getEventos = () => {
      fetch("https://api-eventos-3-w.onrender.com/eventos")
        .then((res) => res.json())
        .then((res) => setEventos(res));
    };
    getEventos();
  }, []);
  return (
    <fieldset className="fieldseteventos">
      <legend className="legendeventos">Eventos a los que puedes asistir</legend>
      <thead className="theadeventos">
        <tr className="theadtreventos">
          <th className="thtieventos">Titulo</th>
          <th className="thdeeventos">Descripcion</th>
          <th className="thfeeventos">Fecha</th>
          <th className="thhoeventos">Hora</th>
          <th className="thubeventos">Ubicacion</th>
          <th className="thcaeventos">Categoria</th>
        </tr>
      </thead>
      <tbody>
        {eventos.map((evento) => (
          <tr className="tbodytreventos" key={evento.id}>
            <th className="tbtieventos">{evento.titulo}</th>
            <th className="tbdeeventos">{evento.descripcion}</th>
            <th className="tbfeeventos">{evento.fecha}</th>
            <th className="tbhoeventos">{evento.hora}</th>
            <th className="tbudeventos">{evento.ubicacion}</th>
            <th className="tbcaeventos">{evento.categoria}</th>
          </tr>
        ))}
      </tbody>
    </fieldset>
  );
};

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./eventos.css";

export const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    const getEventos = () => {
      fetch("https://api-eventos-3-w.onrender.com/eventos")
        .then((res) => res.json())
        .then((res) => setEventos(res));
    };
    getEventos();
  }, []);

  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch("https://api-eventos-3-w.onrender.com/eventos/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));
  };

  const handleEdit = (e, id) => {
    e.preventDefault();

    const data = {};
    data["titulo"] = e.target.titulo.value;
    data["descripcion"] = e.target.descripcion.value;
    data["fecha"] = e.target.fecha.value;
    data["hora"] = e.target.hora.value;
    data["ubicacion"] = e.target.ubicacion.value;
    data["categoria"] = e.target.categoria.value;

    const url = "https://api-eventos-3-w.onrender.com/" + id;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    })
      .then(async (r) => {
        const data = await r.json();
        return {
          status: r.status,
          body: data,
        };
      })
      .then((response) => {
        if (response.status === 200) {
          alert("evento editado con exito");
        } else {
          alert("a ocurrido un error");
        }
      })
      .catch((error) => {
        const err = error.message;
        alert("la accion no se pudo ejecutar", err);
      });
  };

  return (
    <fieldset className="fieldseteventos">
      <legend className="legendeventos">
        Eventos a los que puedes asistir
      </legend>
      <table className="taeventos">
        <thead className="theadeventos">
          <tr className="theadtreventos">
            <th className="thtieventos">Titulo</th>
            <th className="thdeeventos">Descripcion</th>
            <th className="thfeeventos">Fecha</th>
            <th className="thhoeventos">Hora</th>
            <th className="thubeventos">Ubicacion</th>
            <th className="thcaeventos">Categoria</th>
            {isAuthenticated ? <th className="">eliminar o editar</th> : <></>}
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

              {isAuthenticated ? (
                <th>
                  <button
                    className="boeleventos"
                    onClick={() => handleDelete(evento.id)}
                  >
                    <i className="fa-solid fa-square-xmark"></i>
                  </button>

                  <button
                    className="boeleventos"
                    onClick={() => handleEdit(evento.id)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </th>
              ) : (
                <></>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </fieldset>
  );
};

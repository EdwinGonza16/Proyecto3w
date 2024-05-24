import { useState, useEffect } from "react";
import { Profile } from "../profile/Profile";
import "./buscarEvento.css";

export const BuscarEvento = () => {
  const [buscar, setBuscar] = useState([]);
  const [inputs, setInputs] = useState({
    nombre: "",
    categoria: "",
    fecha: "",
    ubicacion: "",
  });

  const searchEvent = () => {
    fetch("https://api-eventos-3-w.onrender.com/eventos")
      .then((res) => res.json())
      .then((res) => setBuscar(res));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el valor del input
    const newInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(newInputs);

    // Determinar si algún input tiene valor para deshabilitar los otros
    const isAnyInputFilled = Object.values(newInputs).some(
      (inputValue) => inputValue !== ""
    );

    // Actualizar el estado disabled
    setDisabled(isAnyInputFilled ? name : "");

    /* setInputs(newInputs[name]); */

    console.log(newInputs[name])
    // Estado para saber cuál input deshabilitar
  };

  const [disabled, setDisabled] = useState("");

  useEffect(() => {
    searchEvent();
  }, []);

  return (
    <>
      <Profile />

      <form className="inbobueventos">
        <input
          className="inbueventos"
          type="text"
          name="nombre"
          placeholder="Buscar por nombre"
          value={inputs.nombre}
          onChange={handleChange}
          disabled={disabled !== "" && disabled !== "nombre"}
        />
        <input
          className="inbueventos"
          type="text"
          name="categoria"
          placeholder="Buscar por categoria"
          value={inputs.categoria}
          onChange={handleChange}
          disabled={disabled !== "" && disabled !== "categoria"}
        />
        <input
          className="inbueventos"
          type="text"
          name="ubicacion"
          placeholder="Buscar por ubicacion"
          value={inputs.ubicacion}
          onChange={handleChange}
          disabled={disabled !== "" && disabled !== "ubicacion"}
        />
        <input
          className="inbueventos"
          type="date"
          name="fecha"
          value={inputs.fecha}
          onChange={handleChange}
          disabled={disabled !== "" && disabled !== "fecha"}
        />
        <button className="loginbuton bobueventos">Realizar busqueda</button>
      </form>

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
            </tr>
          </thead>
          <tbody>
            {buscar.map((buscar) => (
              <tr className="tbodytreventos" key={buscar.id}>
                <th className="tbtieventos">{buscar.titulo}</th>
                <th className="tbdeeventos">{buscar.descripcion}</th>
                <th className="tbfeeventos">{buscar.fecha}</th>
                <th className="tbhoeventos">{buscar.hora}</th>
                <th className="tbudeventos">{buscar.ubicacion}</th>
                <th className="tbcaeventos">{buscar.categoria}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </fieldset>
    </>
  );
};

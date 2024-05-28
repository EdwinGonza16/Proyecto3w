import { useState, useEffect } from "react";
import { Profile } from "../profile/Profile";
import "./buscarEvento.css";

export const BuscarEvento = () => {
  const [buscar, setBuscar] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [inputs, setInputs] = useState({
    nombre: "",
    categoria: "",
    fecha: "",
    ubicacion: "",
  });
  /* const [searchevents, setSearchevents] = useState([]) */

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

    return newInputs[name];
    /* console.log(searchevents) */
  };

  // Estado para saber cuál input deshabilitar
  const [disabled, setDisabled] = useState("");

  useEffect(() => {
    searchEvent();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    /* inputs.find */

    let propiedadNoVacia = null;

    for (const key in inputs) {
      if (inputs[key] !== "") {
        propiedadNoVacia = { key, value: inputs[key] };
        break; // Sale del bucle una vez encontrada la propiedad no vacía
      }
    }

    if (propiedadNoVacia) {
      const filtered = buscar.filter(
        (buscar) => buscar[propiedadNoVacia.key] === propiedadNoVacia.value
      );
      console.log(filtered)
      setFilteredEvents(filtered);
      /* setBuscar(filtered); */
    } else {
      setFilteredEvents(buscar); // Si no hay input, mostrar todos los eventos
    }

    /* console.log(propiedadNoVacia)
    console.log(buscar) */

    /* return buscar */
    /* console.log(propiedadNoVacia); */
  };

  return (
    <>
      <Profile />

      <form className="inbobueventos" onSubmit={handleSubmit}>
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
        <button className="loginbuton bobueventos" type="submit">
          Realizar busqueda
        </button>
      </form>

      <fieldset className="fieldseteventos">
        <legend className="legendeventos">
          Busca el evento al que deseas asistir
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
            {filteredEvents.map((evento) => (
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
        </table>
      </fieldset>
    </>
  );
};

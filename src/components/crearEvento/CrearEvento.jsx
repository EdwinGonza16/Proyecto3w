import "./crearEvento.css";

export const CrearEvento = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {};
    data["titulo"] = e.target.titulo.value;
    data["descripcion"] = e.target.descripcion.value;
    data["fecha"] = e.target.fecha.value;
    data["hora"] = e.target.hora.value;
    data["ubicacion"] = e.target.ubicacion.value;
    data["categoria"] = e.target.categoria.value;

    const url = "https://api-eventos-3-w.onrender.com/eventos";
    fetch(url, {
      method: "POST",
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
          alert("evento creado con exito");
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
    <fieldset className="formcrearevento">
      <legend className="lefocrearevento">
        {" "}
        Crea un evento para que las personas puedan asitir{" "}
      </legend>
      <form className="focrearevento" onSubmit={handleSubmit}>
        <div className="difocrearevento">
          <label htmlFor="titulo" className="lafocrearevento">
            Titulo
          </label>
          <input
            type="text"
            name="titulo"
            className="infocrearevento"
            required
            maxLength="30"
          />
        </div>

        <div className="difocrearevento">
          <label htmlFor="descripcion" className="lafocrearevento">
            Descripcion
          </label>
          <input
            type="text"
            name="descripcion"
            className="infocrearevento"
            required
            maxLength="100"
          />
        </div>

        <div className="difocrearevento">
          <label htmlFor="fecha" className="lafocrearevento">
            Fecha
          </label>
          <input
            type="date"
            name="fecha"
            className="infocrearevento"
            required
          />
        </div>

        <div className="difocrearevento">
          <label htmlFor="hora" className="lafocrearevento">
            Hora
          </label>
          <input type="time" name="hora" className="infocrearevento" required />
        </div>

        <div className="difocrearevento">
          <label htmlFor="ubicacion" className="lafocrearevento">
            Ubicacion
          </label>
          <input
            type="text"
            name="ubicacion"
            className="infocrearevento"
            required
            maxLength="50"
          />
        </div>

        <div className="difocrearevento">
          <label htmlFor="categoria" className="lafocrearevento">
            Categoria
          </label>
          <select className="infocrearevento" name="categoria" required>
            <option>Disfraces</option>
            <option>Baby Shower</option>
            <option>Boda</option>
            <option>15 Años</option>
            <option>Cumpleaños</option>
            <option>Aniversario</option>
          </select>
        </div>

        <button type="submit" className="loginbuton">
          Crear evento
        </button>
      </form>
    </fieldset>
  );
};

import React, { useState } from "react";
import Error from "./Error";

function Buscador({ guardarBusqueda }) {
	const [terminoBusqueda, guardarTerminoBusqueda] = useState("");
	const [error, guardarError] = useState(false);

	const buscarImagen = e => {
		e.preventDefault();

		// validar
		if (terminoBusqueda === "") {
			guardarError(true);
			return;
		}

		// enviar el termino hacia el componente principal
		guardarError(false);
		guardarBusqueda(terminoBusqueda);
	};

	return (
		<form onSubmit={buscarImagen}>
			<div className="row">
				<div className="fomr-group col-md-8">
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Busca una imagen, ejemplo: Café"
						onChange={e => guardarTerminoBusqueda(e.target.value)}
					/>
				</div>
				<div className="fomr-group col-md-4">
					<input
						type="submit"
						className="btn btn-lg btn-info btn-block"
						value="buscar"
					/>
				</div>
			</div>
			{error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
		</form>
	);
}

export default Buscador;

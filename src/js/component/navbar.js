import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	function eliminar(indice) {
		if (indice > -1) {
			//Para validar que el arreglo no esté vacío
			let aux = store.favorites.filter((value, index) => index !== indice);
			actions.eliminarFavorito(aux);
		}
	}

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Database</span>
			</Link>
			<Link to="/characters">
				<button className="btn btn-success mx-2">Personajes</button>
			</Link>
			<Link to="/vehicles">
				<button className="btn btn-success mx-2">Vehiculos</button>
			</Link>
			<Link to="/planets">
				<button className="btn btn-success mx-2">Planetas</button>
			</Link>
			<div className="ml-auto">
				<div className="btn-group dropleft">
					<button
						type="button"
						className="btn btn-warning dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favoritos <span>({store.favorites.length})</span>
					</button>
					<ul className="dropdown-menu">
						{store.favorites.length == 0 ? (
							<li className="dropdown-item">
								<p className="my-2">No tienes favoritos ¡Agrega favoritos!</p>
							</li>
						) : (
							store.favorites.map(function(name, index) {
								return (
									<li
										key={index}
										className="dropdown-item d-flex justify-content-between align-items-center seleccionar">
										<p className="my-2">{name.nombre}</p>
										<button
											type="button"
											className="btn btn-link hide ml-2"
											onClick={() => {
												eliminar(index);
											}}>
											<i className="fas fa-times "></i>
										</button>
									</li>
								);
							})
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

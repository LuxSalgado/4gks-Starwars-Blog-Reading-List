import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Database</span>
			</Link>
			<Link to="/characters">
				<button className="btn btn-primary mx-2">Personajes</button>
			</Link>
			<Link to="/vehicles">
				<button className="btn btn-success mx-2">Vehiculos</button>
			</Link>
			<Link to="/planets">
				<button className="btn btn-danger mx-2">Planetas</button>
			</Link>
			<div className="ml-auto">
				<h1>Aqui va la lista de favoritos</h1>
			</div>
		</nav>
	);
};

import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);

	function agregar(nombre) {
		let aux = store.favorites;
		actions.agregarFavorito(nombre, aux);
	}

	return (
		<div className="card my-3 mx-3 col-3" /* style={{ width: "50rem" }} */>
			<img className="card-img-top" src={props.imagen} alt="Card image cap" />
			<div className="card-body d-flex flex-column align-items-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					{props.campoUno}
					{props.descUno}
				</p>
				<p className="card-text">
					{props.campoDos}
					{props.descDos}
				</p>
				<p className="card-text">
					{props.campoTres}
					{props.descTres}
				</p>
			</div>
			<div className="card-footer d-flex justify-content-around">
				<a href="#" className="btn btn-info">
					Más Información
				</a>
				{
					<button
						type="button"
						className={`btn btn-outline-warning ml-2 text-warning buttonFav ${
							store.favorites.some(function(o) {
								return o["nombre"] === props.title;
							})
								? "invisible"
								: ""
						}`}
						onClick={() => {
							agregar(props.title);
						}}>
						<i className="fas fa-star" />
					</button>
				}
			</div>
		</div>
	);
};

Card.propTypes = {
	imagen: PropTypes.string,
	title: PropTypes.string,
	campoUno: PropTypes.string,
	campoDos: PropTypes.string,
	campoTres: PropTypes.string,
	descUno: PropTypes.string,
	descDos: PropTypes.string,
	descTres: PropTypes.string,
	content: PropTypes.string,
	link: PropTypes.string
};

//Definir proptypes

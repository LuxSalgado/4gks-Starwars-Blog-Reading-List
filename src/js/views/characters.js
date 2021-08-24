import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	/* const [personajesRecibidos, setPersonajesRecibidos] = useState([]);

	const listaPersonajes = () => {
		fetch("https://swapi.dev/api/people/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setPersonajesRecibidos(data.results));
	};

	useEffect(() => {
		listaPersonajes();
	}, []); */

	return (
		<div className="container d-flex flex-wrap">
			{store.characters.map((item, index) => {
				return (
					<Card key={index} title={item.name} /> //agregar el texto key
				);
			})}
		</div>
	);
};

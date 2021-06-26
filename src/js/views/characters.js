import React, { useState, useEffect } from "react";
import { Card } from "../component/card";

export const Characters = () => {
	const [personajesRecibidos, setPersonajesRecibidos] = useState([]);

	const listaPersonajes = () => {
		fetch("https://swapi.dev/api/people/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setPersonajesRecibidos(data.results));
	};

	useEffect(() => {
		listaPersonajes();
	}, []);

	return (
		<div className="container d-flex justify-content-between">
			{personajesRecibidos.map((item, index) => {
				return (
					<Card key={index} title={item.name} /> //agregar el texto key
				);
			})}
		</div>
	);
};

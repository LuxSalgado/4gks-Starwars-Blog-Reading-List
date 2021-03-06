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
		<div className="container my-2 border rounded">
			<h3 className="text-white text-center">Personajes</h3>
			<div className="overflow-auto row flex-row flex-nowrap">
				{store.characters.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							imagen={
								"data:image/jpeg;base64,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"
							}
							campoUno={"Nacimiento: "}
							campoDos={"G??nero: "}
							campoTres={"Color de ojos: "}
							descUno={item.birth_year}
							descDos={item.gender}
							descTres={item.eye_color}
						/> //agregar el texto key
					);
				})}
			</div>
		</div>
	);
};

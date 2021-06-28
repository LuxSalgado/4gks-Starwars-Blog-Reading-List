import React, { useState, useEffect } from "react";
import { Card } from "../component/card";

/* export const Vehicles = () => {
	return <h1>Vehiculos</h1>;
}; */

export const Vehicles = () => {
	const [vehiculosRecibidos, setVehiculosRecibidos] = useState([]);

	const listaVehiculos = () => {
		fetch("https://swapi.dev/api/vehicles/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setVehiculosRecibidos(data.results));
	};

	useEffect(() => {
		listaVehiculos();
	}, []);

	return (
		<div className="container d-flex flex-wrap">
			{vehiculosRecibidos.map((item, index) => {
				return (
					<Card key={index} title={item.name} /> //agregar el texto key
				);
			})}
		</div>
	);
};

import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
/* export const Vehicles = () => {
	return <h1>Vehiculos</h1>;
}; */

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	//const [vehiculosRecibidos, setVehiculosRecibidos] = useState([]); ---> No se utiliza

	//API Fetch anterior a Flux
	/* const listaVehiculos = () => {
		fetch("https://swapi.dev/api/vehicles/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setVehiculosRecibidos(data.results));
	}; */

	//UseEffect anterior a Flux
	/* useEffect(() => {
		listaVehiculos();
	}, []); */

	return (
		<div className="container d-flex flex-wrap">
			{store.vehicles.map((item, index) => {
				return (
					<Card key={index} title={item.name} /> //agregar el texto key
				);
			})}
		</div>
	);
};

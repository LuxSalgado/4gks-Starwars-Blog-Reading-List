import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchCharacters();
		actions.fetchVehicles();
		actions.fetchPlanets();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Lista de favoritos de StarWars</h1>
			<div className="container my-2 border rounded">
				<h3>Personajes</h3>
				<div className="overflow-auto row flex-row flex-nowrap">
					{store.characters.map((item, index) => {
						return (
							<Card key={index} title={item.name} /> //agregar el texto key
						);
					})}
				</div>
			</div>
			<div className="container my-2 border rounded">
				<h3>Vehículos</h3>
				<div className="overflow-auto row flex-row flex-nowrap">
					{store.vehicles.map((item, index) => {
						return (
							<Card key={index} title={item.name} /> //agregar el texto key
						);
					})}
				</div>
			</div>
			<div className="container my-2 border rounded">
				<h3>Planetas</h3>
				<div className="overflow-auto row flex-row flex-nowrap">
					{store.planets.map((item, index) => {
						return (
							<Card key={index} title={item.name} /> //agregar el texto key
						);
					})}
				</div>
			</div>
			{/* <p>{JSON.stringify(store.characters)}</p>
			<p>{JSON.stringify(store.vehicles)}</p>
			<p>{JSON.stringify(store.planets)}</p> */}
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};

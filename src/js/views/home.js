import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

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
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<p>{JSON.stringify(store.characters)}</p>
			<p>{JSON.stringify(store.vehicles)}</p>
			<p>{JSON.stringify(store.planets)}</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};

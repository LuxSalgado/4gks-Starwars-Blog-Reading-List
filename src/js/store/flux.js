const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchCharacters: () => {
				fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					//.then(data => console.log("---DATA---", data.results));
					.then(data => setStore({ characters: data.results }));
			},
			fetchVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }));
			},
			fetchPlanets: () => {
				fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
			},
			eliminarFavorito: favoritos => {
				setStore({ favorites: favoritos });
				//console.log("Ojo con esto ------> " + JSON.stringify(favoritos));
			},
			agregarFavorito: (nuevoFav, favoritos) => {
				let aux = [...favoritos, { nombre: nuevoFav }];
				setStore({ favorites: aux });
				//console.log("Ojo con esto ------> " + JSON.stringify(aux));
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

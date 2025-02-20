const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles:[],
			favs: [],
			character:{},
			planet:{},
			vehicle:{}
		},
		actions: {
			
			loadSomeCharacters: async () => {
				const response = await fetch("https://www.swapi.tech/api/people")
				const data = await response.json();
				const store = getStore();
				setStore({...store,'characters':data})	
			},
			loadSomePlanets: async ()=>{
				const response = await fetch("https://www.swapi.tech/api/planets")
				const data = await response.json();
				const store = getStore();
				setStore({...store,'planets': data})
			},
			loadSomeVehicles: async ()=>{
				const response = await fetch("https://www.swapi.tech/api/vehicles")
				const data = await response.json();
				const store = getStore();
				setStore({...store,'vehicles': data})
			},
			character: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
				const data = await response.json();
				const store = getStore();
				setStore({...store,'character':data})
				console.log(data);
			},	
			planet: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
				const data = await response.json();
				const store = getStore();
				setStore({...store,'planet':data})
				console.log(data);
			},
			vehicle: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				const data = await response.json();
				const store = getStore();
				setStore({...store,'vehicle':data})
				console.log(data);
			},
			handleFavoritos: (name) =>{
				const store = getStore()
				if(store.favs.includes(name)){
					const filtrado = store.favs.filter(favorito => favorito != name)
					setStore({...store, favs : filtrado})
				}else{
					setStore({...store, favs: [...store.favs, name]})
				}
			}

		}
	};
};

export default getState;

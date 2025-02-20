import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singleCard.css";


export const Planet = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	useEffect(() => {
		actions.planet(id)
	}, [])

	return (
		<div className="profile-container">
			<div className="profile-header">
				<div className="profile-image">
					<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${id}.jpg?raw=true`} className="card-img-top" alt="..." />
				</div>
				<div className="profile-info">
					<h1>{store.planet.result?.properties.name}</h1>
				</div>
			</div>
			<div className="profile-details">
				<div className="detail dimensions">
					<h4>CARACTERÍSTICAS</h4>
					<p>Diametro: {store.planet.result?.properties.diameter} KM</p>
					<p> Gravedad: {store.planet.result?.properties.gravity}</p>
					<p> Rotación: {store.planet.result?.properties.rotation_period} H</p>
				</div>
				<div className="detail ">
                    <h4>CLIMA Y TERRENO</h4>
                    <p>Clima: {store.planet.result?.properties.climate}</p>
					<p>Topografía: {store.planet.result?.properties.terrain}</p>
                </div>
			</div>
		</div>
	)
}





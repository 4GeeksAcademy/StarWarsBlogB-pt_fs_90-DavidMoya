import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className=" container my-5">
			<div className="slot d-flex mb-5">
				{store.characters['results']?.map((character, index) => {
					return (
						<div className="cardBox">
							<div key={index} className="card">
								<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${character.uid}.jpg?raw=true`} className="card-img-top" alt="..." />
								<div className="card-body text-white">
									<h5 className="card-title">{character.name}</h5>
									<p className="card-text">ID: {character.uid}</p>
								</div>
								<div className="card-footer d-flex">
									<Link to={`/character/${character.uid}`}>
										<div className="btn btn-primary"
											onClick={() => {
												actions.character(character.uid)
											}}>More info</div>
									</Link>
									<button type="button" className="btn btn-danger"
										onClick={
											() => {
												actions.handleFavoritos(character.name)
											}
										}>
										<i className="fa-regular fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<div className="slot d-flex mb-5">
				{store.planets['results']?.map((planet, index) => {
					return (
						<div className="cardBox">
							<div key={index} className="card">
								<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${planet.uid}.jpg?raw=true`} className="card-img-top" alt="..." />
								<div className="card-body text-white">
									<h5 className="card-title">{planet.name}</h5>
									<p className="card-text">ID: {planet.uid}</p>
								</div>
								<div className="card-footer d-flex">
									<Link to={`/planet/${planet.uid}`}>
										<div className="btn btn-primary"
											onClick={() => {
												actions.planets(planet.uid)
											}}>More info</div>
									</Link>
									<button type="button" className="btn btn-danger"
										onClick={
											() => {
												actions.handleFavoritos(planet.name)
											}
										}>
										<i className="fa-regular fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<div className="slot d-flex mb-5">
				{store.vehicles['results']?.map((vehicle, index) => {
					return (
						<div className="cardBox">
							<div key={index} className="card">
								<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/${vehicle.uid}.jpg?raw=true`} className="card-img-top" alt="..." />
								<div className="card-body text-white">
									<h5 className="card-title">{vehicle.name}</h5>
									<p className="card-text">ID: {vehicle.uid}</p>
								</div>
								<div className="card-footer d-flex">
									<Link to={`/vehicle/${vehicle.uid}`}>
										<a href="#" className="btn btn-primary"
											onClick={() => {
												actions.vehicle(vehicle.uid)
											}}>More info</a>
									</Link>
									<button type="button" className="btn btn-danger"
										onClick={
											() => {
												actions.handleFavoritos(vehicle.name)
											}
										}>
										<i className="fa-regular fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
};

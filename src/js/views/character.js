import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singleCard.css";


export const Character = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	useEffect(()=>{
		actions.character(id)
	},[])

	return (
		<div className="profile-container">
            <div className="profile-header">
                <div className="profile-image">
				<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${id}.jpg?raw=true`} className="card-img-top" alt="..." />
                </div>
                <div className="profile-info">
                    <h1>{store.character.result?.properties.name}</h1>
                </div>
            </div>
            <div className="profile-details">
                <div className="detail gender">
                    <h4>GENDER</h4>
                    <p>{store.character.result?.properties.gender}</p>
                </div>
                <div className="detail dimensions">
                    <h4>DIMENSIONS</h4>
                    <p>{store.character.result?.properties.height}</p>
					<p>{store.character.result?.properties.mass}</p>
                    <h4>DIMENSIONS</h4>
                    <p>{store.character.result?.properties.skin_color}</p>
                    <p>{store.character.result?.properties.eye_color}</p>
                </div>
                <div className="detail species">
                    <h4>SPECIES</h4>
                    <p>{store.character.result?.properties.species}</p>
                </div>
                <div className="detail vehicles">
                    <h4>VEHICLES</h4>
                    <p>Ejemplo</p>
                </div>
                <div className="detail weapons">
                    <h4>WEAPONS</h4>
                    <p>Ejemplo</p>
                </div>
                <div className="detail tool">
                    <h4>TOOL</h4>
                    <p>Ejemplo</p>
                </div>
            </div>
        </div>
		
		
		
	)

}







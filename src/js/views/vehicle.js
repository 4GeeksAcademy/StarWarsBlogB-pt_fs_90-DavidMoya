import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singleCard.css";


export const Vehicle = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    useEffect(() => {
        actions.vehicle(id)
    }, [])

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-image">
                    <img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/${id}.jpg?raw=true`} className="card-img-top" alt="..." />
                </div>
                <div className="profile-info">
                    <h1>{store.vehicle.result?.properties.name}</h1>
                </div>
            </div>
            <div className="profile-details">
                <div className="detail dimensions">
                    <h4>CARACTERÍSTICAS</h4>
                    <p>Precio: {store.vehicle.result?.properties.cost_in_credits} créditos</p>
                    <p>Velocidad Max: {store.vehicle.result?.properties.max_atmosphering_speed} KM/H</p>
                    <p>Carga Max: {store.vehicle.result?.properties.cargo_capacity} KG</p>
                </div>
                <div className="detail ">
                    <h4>DATOS DE FÁBRICA</h4>
                    <p>Fabricante: {store.vehicle.result?.properties.manufacturer}</p>
                    <p>Fecha de fabricación: {store.vehicle.result?.properties.created}</p>
                </div>

            </div>
        </div>
    )
}





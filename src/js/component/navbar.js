import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let numberFavs = store.favs.length;

	return (
		<nav className="navbar navbar-light bg-black mb-3 p-3 d-flex sticky-top">
			<Link to="/">
				<img style={{height:"64px", width:"150px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Star_wars_logo_alternate.svg"/>
			</Link>
			<div className="btn-group me-4">
				<button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
					Favorites {numberFavs}
				</button>
				<ul className="dropdown-menu dropdown-menu-lg-end">
					{numberFavs === 0 ? (
						<li className="dropdown-item text-muted">No hay favoritos</li>
					) : (
						store.favs.map((fav, index) => (
							<li key={index}>
								<span className="dropdown-item" type="button">
									{fav}
								</span>
							</li>
						))
					)}
				</ul>
			</div>
		</nav>
	);
};

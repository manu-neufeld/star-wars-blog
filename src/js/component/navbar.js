import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const Navbar = () => {
	const { store } = useContext(Context);
	const [listElement, setListElement] = useState(null);
	const list = store.favorites.map((item, index) => {
		return (
			<li className="dropdown-item" key={index}>
				{item}
			</li>
		);
	});
	let deleteFav = indexItem => {
		store.favorites.splice(indexItem, 1);
	};

	useEffect(() => {
		setListElement(
			store.favorites.map((eachFavorite, index) => {
				return (
					<li key={index} className="dropdown-item">
						{eachFavorite}
						<button className="button" onClick={() => deleteFav(index)}>
							<i className="fas fa-trash-alt" />
						</button>
					</li>
				);
			})
		);
	});
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					src="https://tendencybook.com/wp-content/uploads/2019/08/star-wars-.png"
					className="navbar-brand mb-0"
				/>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Show favorites
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{listElement}
				</ul>
			</div>
		</nav>
	);
};

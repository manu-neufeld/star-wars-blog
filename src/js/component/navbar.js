import React, { useState, useContext, setStore, useEffect } from "react";
import PropsTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	// let deleteTask = indexItem => {
	// 	task.splice(indexItem, 1);
	// };

	const list = store.favorites.map((item, index) => {
		return (
			<li className="dropdown-item" key={index}>
				{item}
			</li>
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
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item">Hello</a>
					{store.favorites.map((eachFavorite, index) => {
						return (
							<a key={index} className="dropdown-item">
								{eachFavorite}
								<button>Del</button>
							</a>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

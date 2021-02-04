import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characterCard.scss";

export const CharacterCard = props => {
	const { actions } = useContext(Context);

	let name = props.characterName;

	return (
		<div className="card each-character-card">
			<img src={props.img} className="card-img-top each-character-image" alt="#" />
			<div className="card-body each-character-body">
				<h5 className="card-title each-character-name">Name: {name}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Height: {props.characterHeight}</li>
					<li className="list-group-item">Hair color: {props.characterHairColor}</li>
					<li className="list-group-item">Skin color: {props.characterSkinColor}</li>
					<li className="list-group-item">Birth year: {props.characterBirthYear}</li>
				</ul>
			</div>
			<div className="card-body">
				<Link to={"/character/" + name} className="more-info-btn">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Click to more info!
					</span>
				</Link>
				<button
					className="btn btn-outline-danger fav-button"
					onClick={() => {
						actions.setFavorites(name);
					}}>
					<i className="fas fa-heart" />
				</button>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	characterName: PropTypes.string,
	characterHeight: PropTypes.string,
	characterHairColor: PropTypes.string,
	characterSkinColor: PropTypes.string,
	characterBirthYear: PropTypes.string,
	img: PropTypes.string
};

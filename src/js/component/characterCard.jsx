import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characterCard.scss";

export const CharacterCard = props => {
	const { actions } = useContext(Context);

	let name = props.characterName;

	return (
		<div className="card each-character-card col-5">
			<div className="img-fav-div">
				<img src={props.img} className="card-img-top each-character-image" alt="#" />
				<button
					className="btn btn-outline-danger fav-button"
					onClick={() => {
						actions.setFavorites(name);
					}}>
					<i className="fas fa-heart" />
				</button>
			</div>
			<div className="card-body each-character-body">
				<h5 className="card-title each-character-name">Name: {name}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Height: {props.characterHeight}</li>
					<li className="list-group-item">Hair color: {props.characterHairColor}</li>
					<li className="list-group-item">Skin color: {props.characterSkinColor}</li>
					<li className="list-group-item">Birth year: {props.characterBirthYear}</li>
				</ul>
			</div>
			<div id="container">
				<Link to={"/character/" + name}>
					<button className="learn-more">
						<span className="circle" aria-hidden="true">
							<span className="icon arrow" />
						</span>
						<span className="button-text">Learn More</span>
					</button>
				</Link>
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

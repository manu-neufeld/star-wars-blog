import React, { useEffect, getStore, useContext } from "react";
import { Context } from "../store/appContext";
import context from "react-bootstrap/esm/AccordionContext";
import { Link } from "react-router-dom";

export const Descriptions = props => {
	const { store, actions } = useContext(context);

	return (
		<div className="card">
			<img src={luke} alt="..." />
			<div className="card-body">
				<h5 className="card-title">Luke Skywalker</h5>
				<p className="card-text">
					Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic
					Civil War during the reign of the Galactic Empire. Along with his companions, Princess Leia Organa
					and General Han Solo, Skywalker served on the side of the Alliance to Restore the Republic—an
					organization committed to the downfall of the Galactic Empire and the restoration of democracy.
					Following the war, Skywalker became a living legend, and was remembered as one of the greatest Jedi
					in galactic history.
				</p>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home!
					</span>
				</Link>
			</div>
		</div>
	);
};

// export const Descriptions = props => {
// 	const { store, actions } = useContext(context);

// 	const cardDescription = store.starWarsCharactersDescription.map((nameTitle, index) => (
// 		<DescriptionCharacterCard
// 			key={index}
// 			characterName={nameTitle.name}
// 			img={store.imgStarWarsCharacters[index]}
// 			characterDescription={store.descriptionsStarWarsCharacters[index]}
// 		/>
// 	));
// 	return cardDescription;
// };

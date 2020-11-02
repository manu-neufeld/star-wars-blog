import React, { useEffect, getStore, useContext } from "react";
import { DescriptionCharacterCard } from "./descriptionCharacterCard.jsx";
import { Context } from "../store/appContext";
import context from "react-bootstrap/esm/AccordionContext";

export const Descriptions = props => {
	const { store, actions } = useContext(context);

	const cardDescription = store.starWarsCharactersDescription.map((nameTitle, index) => (
		<DescriptionCharacterCard
			key={index}
			characterName={nameTitle.name}
			img={store.imgStarWarsCharacters[index]}
			characterDescription={store.descriptionsStarWarsCharacters[index]}
		/>
	));
	return cardDescription;
};

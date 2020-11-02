import React, { useEffect, getStore, useContext } from "react";
import { CharacterCard } from "./characterCard.jsx";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { store, actions } = useContext(Context);

	console.log("info de flux: ", store.starWarsCharactersDescription);
	console.log("img importadas: ", store.imgStarWarsCharacters);

	const cards = store.starWarsCharactersDescription.map((starWarsCharacterDescription, index) => (
		<CharacterCard
			key={index}
			img={store.imgStarWarsCharacters[index]}
			racterName={starWarsCharacterDescription.name}
			characterHeight={starWarsCharacterDescription.height}
			characterHairColor={starWarsCharacterDescription.hair_color}
			characterSkinColor={starWarsCharacterDescription.skin_color}
			characterEyeColor={starWarsCharacterDescription.eye_color}
			characterBirthYear={starWarsCharacterDescription.birth_year}
		/>
	));

	console.log("Cards: ", cards);

	return cards;
};

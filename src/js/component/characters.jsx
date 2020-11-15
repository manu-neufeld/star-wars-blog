import React, { useEffect, getStore, useContext } from "react";
import { CharacterCard } from "./characterCard.jsx";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Characters = props => {
	const { store, actions } = useContext(Context);

	const cards = store.starWarsCharactersDescription.map((starWarsCharacterDescription, index) => (
		<CharacterCard
			key={index}
			img={store.imgStarWarsCharacters[index]}
			characterName={starWarsCharacterDescription.name}
			characterHeight={starWarsCharacterDescription.height}
			characterHairColor={starWarsCharacterDescription.hair_color}
			characterSkinColor={starWarsCharacterDescription.skin_color}
			characterEyeColor={starWarsCharacterDescription.eye_color}
			characterBirthYear={starWarsCharacterDescription.birth_year}
		/>
	));
	return cards;
};

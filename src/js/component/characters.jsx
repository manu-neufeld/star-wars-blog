import React, { useContext, Fragment } from "react";
import { CharacterCard } from "./characterCard.jsx";
import { Context } from "../store/appContext";
import "../../styles/characterCard.scss";

export const Characters = () => {
	const { store } = useContext(Context);

	const cards = store.starWarsCharactersDescription.map((starWarsCharacterDescription, index) => (
		<CharacterCard
			key={index}
			img={store.imgStarWarsCharacters[index].img}
			characterName={starWarsCharacterDescription.name}
			characterHeight={starWarsCharacterDescription.height}
			characterHairColor={starWarsCharacterDescription.hair_color}
			characterSkinColor={starWarsCharacterDescription.skin_color}
			characterEyeColor={starWarsCharacterDescription.eye_color}
			characterBirthYear={starWarsCharacterDescription.birth_year}
		/>
	));
	return (
		<div className="all-characters-view">
			<h1>Personajes</h1>
			<div className="row">{cards}</div>
		</div>
	);
};

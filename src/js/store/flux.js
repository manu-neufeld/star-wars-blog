import luke from "../../img/luke.jpg";
import c3po from "../../img/C-3PO.jpg";
import r2d2 from "../../img/R2D2.jpg";
import darthVader from "../../img/darth-vader.jpg";
import leia from "../../img/leia.jpg";
import owenLars from "../../img/owen-lars.jpg";
import beru from "../../img/beru-whitesun.jpg";
import r5d4 from "../../img/R5-D4.jpg";
import biggs from "../../img/biggs.jpg";
import obiWan from "../../img/obi-wan.jpg";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starWarsCharactersDescription: [],
			imgStarWarsCharacters: [luke, c3po, r2d2, darthVader, leia, owenLars, beru, r5d4, biggs, obiWan],
			descriptionsStarWarsCharacters: [
				"Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. Along with his companions, Princess Leia Organa and General Han Solo, Skywalker served on the side of the Alliance to Restore the Republic—an organization committed to the downfall of the Galactic Empire and the restoration of democracy. Following the war, Skywalker became a living legend, and was remembered as one of the greatest Jedi in galactic history.",

				"C-3PO, sometimes spelled See-Threepio and often referred to simply as Threepio, was a 3PO-series protocol droid designed to interact with organics, programmed primarily for etiquette and protocol. He was fluent in over six million forms of communication, and developed a fussy and worry-prone personality throughout his many decades of operation. Along with his counterpart, the astromech droid R2-D2, C-3PO constantly found himself directly involved in pivotal moments of galactic history, and aided in saving the galaxy on many occasions.",

				"R2-D2, pronounced Artoo-Deetoo and often referred to as R2 (Artoo), was an R2-series astromech droid manufactured by Industrial Automaton with masculine programming. A smart, spunky droid who would serve a multitude of masters over his lifetime, R2-D2 was never given a full memory wipe (apart from a partial wipe of select information by Cad Bane during the senate hostage crisis) nor did he ever receive new programming, with these factors resulting in an adventurous and independent attitude. Often finding himself in pivotal moments in galactic history, his bravery and ingenuity saved the galaxy on numerous occasions.",

				"Anakin Skywalker was a human male Jedi Knight of the Galactic Republic and the Chosen One of the Force. During the Clone Wars, his accomplishments as a Jedi General earned him the Hero With No Fear moniker. After turning to the dark side of the Force, he became known as Darth Vader, a Dark Lord of the Sith and Sith apprentice to Galactic Emperor Darth Sidious. As a Sith Lord, Vader turned against his former comrades and hunted the surviving Jedi into near extinction. He became an enforcer of the Galactic Empire, and worked to crush the Alliance to Restore the Republic for opposing his Sith Master's will. Yet despite his actions as Darth Vader, a glimmer of the light side of the Force remained within the former Anakin Skywalker.",

				"Leia Skywalker Organa Solo was a Force-sensitive human female political and military leader who served in the Alliance to Restore the Republic during the Imperial Era and the New Republic and Resistance in the subsequent New Republic Era. Adopted into the House of Organa, the Alderaanian royal family, she was Princess Leia Organa of Alderaan, a planet in the Core Worlds known for its dedication to pacifism. The princess was raised as the daughter of Senator Bail Organa and his wife, Queen Breha Organa, making her the heir to the Alderaanian monarchy. Instilled with the values of her adopted homeworld, Organa devoted her life to the restoration of democracy by opposing authoritarian regimes such as the Galactic Empire and the First Order.",

				"Owen Lars was a human male moisture farmer from the desert planet Tatooine. He was the son of Aika and Cliegg Lars, and he became the stepbrother of Jedi Knight Anakin Skywalker when Cliegg married Anakin's mother, Shmi Skywalker. In 22 BBY, Shmi was killed by Tusken Raiders, and Cliegg passed away soon after. Lars married his girlfriend, Beru Whitesun, and they toiled to maintain the homestead.",

				"Beru Whitesun Lars, born Beru Whitesun, was a human female from the planet Tatooine. She was married to Owen Lars, the stepbrother of Jedi Knight Anakin Skywalker, whose son, Luke Skywalker, they raised during the reign of the Galactic Empire. Lars was killed along with her husband by Imperial stormtroopers, who also burned down the Lars moisture farm. With their deaths, Skywalker left his homeworld and joined the Alliance to Restore the Republic.",

				"R5-D4, also called 'Red' by Luke Skywalker, was a red and white-striped R5 astromech droid owned by a group of Jawas on Tatooine in the early days of the Galactic Civil War. Shortly before the Battle of Yavin, the Jawas attempted to sell him to Owen Lars, but the droid purposely malfunctioned his motivator, so that Lars could purchase R2-D2 in R5-D4's place. The droid survived an Imperial attack on the sandcrawler soon after, and went out to find the rebellion. R5 was still active by the time of the New Republic Era.",

				"Biggs Darklighter was a human male ace pilot who fought for the Alliance to Restore the Republic during the early days of the Galactic Civil War. He grew up on the desert world of Tatooine, where he became a close boyhood friend of Luke Skywalker. The two became pilots and dreamed of leaving Tatooine. Darklighter left his homeworld for the Imperial Academy, but defected from the Galactic Empire after graduation in order to join the Rebel Alliance. He returned to Tatooine one final time to tell Skywalker of his plans.",

				"Obi-Wan Kenobi was a legendary human male Jedi Master who served on the Jedi High Council during the last years of the Republic Era. During the Imperial Era, he adopted the alias Ben Kenobi in order to hide from the regime that drove the Jedi to near extinction. A noble man known for his skills with the Force, Kenobi trained Anakin Skywalker, served as a Jedi General in the Grand Army of the Republic, and became a mentor to Luke Skywalker prior to his death in 0 BBY."
			]
		},
		actions: {
			getStarWarsPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => {
						return response.json();
					})
					.then(jsonApiResponse => {
						console.log("JSON Response: ", jsonApiResponse.results);
						setStore({ starWarsCharactersDescription: jsonApiResponse.results });
						console.log("characterDescriptions: ", getStore().starWarsCharactersDescription);
					})
					.catch(error => {
						console.error("Error", error);
					});
			},

			setPerson: person => {
				let formatedCharacters = [];
				person.map((character, index) => {
					formatedCharacters.push({
						name: character.name,
						height: character.height,
						hair_color: character.hair_color,
						skin_color: character.skin_color,
						eye_color: character.eye_color,
						birth_year: character.birth_year
					});
				});
				setStore({ person: formatedCharacters });
			}
		}
	};
};

export default getState;

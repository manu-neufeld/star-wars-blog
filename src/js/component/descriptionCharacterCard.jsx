import React from "react";
import PropsTypes from "prop-types";

export const DescriptionCharacterCard = props => {
	return (
        <Card>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.characterName}</Card.Title>
                <Card.Text>
                    {props.DescriptionCharacterCard}
                </Card.Text>
                <Button variant="primary">Go home</Button>
            </Card.Body>
        </Card>

    );
    }

DescriptionCharacterCard.propTypes = {
	characterName: PropsTypes.string,
    characterDescription: PropsTypes.string,
    img: PropsTypes.string
};

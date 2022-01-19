import React from "react";
import { Types, Who } from "../scripts/constants";

interface props {
	selected: Boolean;
	type: Types;
	player: Who;
	chosen: Boolean;
	// setChoice: React.Dispatch<React.SetStateAction<Types>> 
	setChoice: (param: Types) => void;
}

const Hand = ({ selected, type, player, chosen, setChoice }: props) => {
	return (
		<div>
			<i
				className={`${selected ? "fas" : "far"} ${type} ${player} ${
					chosen ? "selected" : ""
				}`}
				onClick={() => {
					switch(type) {
						case Types.Rock:
							setChoice(Types.Rock);
							break;
						case Types.Scissors:
							setChoice(Types.Scissors);
							break; 
						case Types.Lizard:
							setChoice(Types.Lizard);
							break; 
						case Types.Spock:
							setChoice(Types.Spock);
							break; 
						case Types.Paper:
							setChoice(Types.Paper);
							break;
						default: 
							break;
					}
				}}
			></i>
		</div>
	);
};

export default Hand;

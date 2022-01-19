import Hand from "../components/hand";
import { Types, Who } from "../scripts/constants";
import React, { useEffect } from "react";

interface props {
	choice: Types;
	// setChoice: React.Dispatch<React.SetStateAction<Types>>;
	setChoice: (param: Types) => void;
}

const UserChoices = ({ choice, setChoice }: props) => {
	useEffect(() => {
		console.log('choice changed');
		console.log(choice);
	}, [choice])

	return (
		<div className="user-choices" id="user-choices">
			<hr />
			<div className="hands-container">
				<Hand
					selected={choice === Types.Rock ? true : false}
					type={Types.Rock}
					player={Who.User}
					chosen={choice === Types.Rock ? true : false}
					setChoice={setChoice}
				/>
				<Hand
					selected={choice === Types.Paper ? true : false}
					type={Types.Paper}
					player={Who.User}
					chosen={choice === Types.Paper ? true : false}
					setChoice={setChoice}
				/>
				<Hand
					selected={choice === Types.Scissors ? true : false}
					type={Types.Scissors}
					player={Who.User}
					chosen={choice === Types.Scissors ? true : false}
					setChoice={setChoice}
				/>
				<Hand
					selected={choice === Types.Lizard ? true : false}
					type={Types.Lizard}
					player={Who.User}
					chosen={choice === Types.Lizard ? true : false}
					setChoice={setChoice}
				/>
				<Hand
					selected={choice === Types.Spock ? true : false}
					type={Types.Spock}
					player={Who.User}
					chosen={choice === Types.Spock ? true : false}
					setChoice={setChoice}
				/>
			</div>
		</div>
	);
};

export default UserChoices;

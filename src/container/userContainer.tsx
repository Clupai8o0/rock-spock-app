import { Types, Who, Outcome } from "../scripts/constants";
import { returnStringType, capitalize } from "../scripts/helper";
import UnSelectedHand from '../components/unSltHand';

interface props {
	choice: Types;
	points: Number;
	victor: Outcome;
}

const UserContainer = ({ choice, points, victor }: props) => {
	return (
		<div className="container" id="user-container">
			<div className="choice">
				<UnSelectedHand type={choice} player={Who?.User} />
				<span className="float user" id="float-left">
					{capitalize(returnStringType(choice))}
				</span>
			</div>
			<div className="user-win-container">
				<h1 className="user title">
					Your -
					<strong id="user-points" className="user">
						{` ${points} points`}
					</strong>
				</h1>
				<div className="win-container">
					<h3 className="result">{capitalize(victor)}</h3>
				</div>
			</div>
		</div>
	);
};

export default UserContainer;

import UnSelectedHand from '../components/unSltHand';
import { Types, Who } from "../scripts/constants";
import { returnStringType, capitalize } from "../scripts/helper";

interface props {
	points: Number;
	choice: Types;
}

const AIContainer = ({ points, choice }: props) => {
	return (
		<div className="container" id="ai-container">
			<h1 className="ai title">
				AI -
				<strong id="ai-points" className="ai">
					{` ${points} points`}
				</strong>
			</h1>

			<div className="choice">
				<UnSelectedHand type={choice} player={Who.AI} />
				<span className="float ai" id="float-right">
					{capitalize(returnStringType(choice))}
				</span>
			</div>
		</div>
	);
};

export default AIContainer;

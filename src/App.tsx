//* stylesheet
import "./css/global.css";
import "./css/container.css";
import "./css/styles.css";
import "./css/mediaQuery.css";

//* containers
import AIContainer from "./container/aiContainer";
import UserChoices from "./container/choices";
import UserContainer from "./container/userContainer";

//* react imports
import { useState, useEffect } from "react";

//* Helper scripts
import { Types, Outcome, choices } from "./scripts/constants";
import { returnStringType } from "./scripts/helper";

function App() {
	//* State Management
	const [aiPoints, setAiPoints] = useState(0);
	const [aiChoice, setAiChoice] = useState(Types.Rock);
	const [userPoints, setUserPoints] = useState(0);
	const [userChoice, setUserChoice] = useState(Types.Rock);
	const [victor, setVictor] = useState(Outcome.Tie);

	//? ------------------------- Theme ------------------------
	const [theme, setTheme] = useState("light");
	// changing theme on startup
	useEffect(() => {
		// if theme is there and it is dark
		// then toggle theme
		if (
			localStorage.getItem("theme") &&
			localStorage.getItem("theme") === "dark"
		) {
			toggleTheme();
		}
	}, []);

	// function to toggle the theme between light and dark
	const toggleTheme = () => {
		const temp = theme === "light" ? "dark" : "light";
		setTheme(temp);
		// changing the theme
		document.documentElement.setAttribute("data-theme", temp);
		// locally storing theme data
		localStorage.setItem("theme", temp);
	};
	//? ------------------------- Theme ------------------------

	//* Choosing a random hand for the AI
	const aiDecision = () => {
		switch (Math.floor(Math.random() * 5)) {
			case 0:
				setAiChoice(Types.Rock);
				break;
			case 1:
				setAiChoice(Types.Paper);
				break;
			case 2:
				setAiChoice(Types.Scissors);
				break;
			case 3:
				setAiChoice(Types.Lizard);
				break;
			case 4:
				setAiChoice(Types.Spock);
				break;
			default:
				setAiChoice(Types.Rock);
				break;
		}
	};

	//* Making decisions of whos victor
	const decider = (usrChoice: Types) => {
		//* Setting the choices
		setUserChoice(usrChoice);
		aiDecision();

		//* turning choice to string
		const user = returnStringType(userChoice),
			ai = returnStringType(aiChoice);

		//* for a tie
		if (user === ai) {
			setVictor(Outcome.Tie);
			return;
		}

		//* checking for Ai's loss
		for (let i = 0; i < choices[user].defeats.length; i++) {
			//* if AI has lost
			if (ai === choices[user].defeats[i]) {
				setVictor(Outcome.Win);
				setUserPoints(userPoints + 1);
				return;
			}
		}

		//* AI has won
		setVictor(Outcome.Loss);
		setAiPoints(aiPoints + 1);
		return;
	};

	return (
		// Card container
		<div className="card">
			{/* Dark/Light theme button */}
			<i
				className={`far fa-${theme === "light" ? "moon" : "sun"}`}
				onClick={toggleTheme}
			></i>

			<div id="container">
				<AIContainer points={aiPoints} choice={aiChoice} />
				<span className="icon-container">
					<i className="fas fa-times" id="cross"></i>
				</span>
				<UserContainer
					choice={userChoice}
					points={userPoints}
					victor={victor}
				/>
			</div>
			<UserChoices choice={userChoice} setChoice={decider} />
		</div>
	);
}

export default App;

import { Types } from "./constants";

//* converting a Types enum into a string
export const returnStringType = (choice: Types) => {
	switch (choice) {
		case Types.Rock:
			return "rock";
		case Types.Scissors:
			return "scissors";
		case Types.Paper:
			return "paper";
		case Types.Lizard:
			return "lizard";
		case Types.Spock:
			return "spock";
		default:
			return 'rock';
	}
};

//* capitalizing string
export const capitalize = (str: String) => {
	const arr = str.split(" ");
	return arr
		.map((word: String) => {
			const wordArr = word.split("");
			wordArr[0] = wordArr[0].toUpperCase();
			return wordArr.join("");
		})
		.join(" ");
};

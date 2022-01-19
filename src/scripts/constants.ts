// types of font awesome icon
export const REG = "far";
export const SOL = "fas";

// hands
export const ROCK = "fa-hand-rock";
export const PAPER = "fa-hand-paper";
export const SCISSORS = "fa-hand-scissors";
export const LIZARD = "fa-hand-lizard";
export const SPOCK = "fa-hand-spock";

// enums
export enum Types {
	Rock = "fa-hand-rock",
	Paper = "fa-hand-paper",
	Scissors = "fa-hand-scissors",
	Lizard = "fa-hand-lizard",
	Spock = "fa-hand-spock",
}

// who is the user
export enum Who {
	User = "user",
	AI = "ai",
}

// who is the victor
export enum Outcome {
	Win = "won",
	Loss = "lost",
	Tie = "tie",
}

// choices
export const choices = {
	rock: { name: "Rock", defeats: ["scissors", "lizard"] },
	paper: { name: "Paper", defeats: ["rock", "spock"] },
	scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
	lizard: { name: "Lizard", defeats: ["paper", "spock"] },
	spock: { name: "Spock", defeats: ["scissors", "rock"] },
};
import { type Player } from "src/types";

export const getWinner = (player1: Player, player2: Player) => {
  if (player1.score > player2.score) return `${player1.name} wins!`;
  if (player1.score < player2.score) return `${player2.name} wins!`;
  return "It's a tie!";
};

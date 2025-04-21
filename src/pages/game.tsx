import { Board } from "~/components/Board";
import type { Route } from "../+types/root";
import { Scoreboard } from "~/components/Scoreboard";
import { useEffect } from "react";
import { useStore } from "~/store";
import { DiceRoller } from "~/components/DiceRoller";
import { TurnHelpText } from "~/components/TurnHelpText";

export const meta = ({}: Route.MetaArgs) => [
  { title: "Game | Contig" },
  { name: "description", content: "Welcome to React Router!" },
];

const GamePage = () => {
  const { resetGame } = useStore();

  useEffect(() => {
    // Reset the game when changing routes
    return () => {
      resetGame();
    };
  }, []);

  return (
    <>
      <Scoreboard />
      <TurnHelpText />
      <DiceRoller />
      <Board />
    </>
  );
};

export default GamePage;

import { Board } from "~/components/Board";
import type { Route } from "../+types/root";
import { Scoreboard } from "~/components/Scoreboard";

export const meta = ({}: Route.MetaArgs) => [
  { title: "Game | Contig" },
  { name: "description", content: "Welcome to React Router!" },
];

const GamePage = () => {
  return (
    <>
      <Scoreboard />
      <Board />
    </>
  );
};

export default GamePage;

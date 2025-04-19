import { Board } from "~/components/Board";
import type { Route } from "../+types/root";

export const meta = ({}: Route.MetaArgs) => [
  { title: "Game | Contig" },
  { name: "description", content: "Welcome to React Router!" },
];

const GamePage = () => {
  return (
    <>
      <Board />
    </>
  );
};

export default GamePage;

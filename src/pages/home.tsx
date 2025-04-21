import { Button } from "~/components/Button";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import { BoardIcon } from "~/components/Icons";

export const meta = ({}: Route.MetaArgs) => [
  { title: "Contig" },
  { name: "description", content: "Welcome to React Router!" },
];

const HomePage = () => {
  return (
    <>
      <BoardIcon />
      <Button as={Link} to="/game" variant="primary">
        New Game
      </Button>
      <Button as={Link} to="/rules" variant="secondary">
        Rules
      </Button>
      <Button as={Link} to="/settings" variant="secondary">
        Settings
      </Button>
    </>
  );
};

export default HomePage;

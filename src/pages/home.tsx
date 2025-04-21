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
      <BoardIcon style={{ margin: "1rem 0" }} />
      <p>
        <span
          style={{
            fontWeight: "bold",
            fontFamily: "serif",
            fontSize: "1.2rem",
          }}
        >
          Contig
        </span>{" "}
        is a math game where players roll dice and use them to make number
        sentences, aiming to cover numbers on a game board and score points for
        each adjacent covered number.
      </p>
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

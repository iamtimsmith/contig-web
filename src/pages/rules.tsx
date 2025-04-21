import { Button } from "~/components/Button";
import type { Route } from "./+types/rules";
import { Link } from "react-router";

export const meta = ({}: Route.MetaArgs) => [
  { title: "Rules | Contig" },
  { name: "description", content: "Welcome to React Router!" },
];

const RulesPage = () => (
  <>
    <h1>Rules</h1>
    <ol>
      <li>
        Two to five players (only two are supported in this tool right now).
      </li>
      <li>
        Player rolls three dice and uses one or two operations on the numbers
        rolled. They are then allowed to select the resulting number on the
        board. (The first play of the game cannot score because there is no
        number covered to which he can be adjacent.) Play passes to the next
        player. A player may NOT cover a number that has been previously
        covered.
      </li>
      <li>
        To score Contig, a player must select a number on the board that is
        adjacent vertically, horizontally, or diagonally to another already
        selected number. One point is scored for each adjacent selected number.
      </li>
      <li>
        A cumulative score is kept for each player. At the end of the set number
        of turns (defaults to 8), the player with the highest score wins!
      </li>
      {/* <li>When a player rolls the dice and is unable to produce a number that has not already been
covered, play goes to the next player. If they pass the dice believing there is no play when there
is one, any of the other players may call out his mistake. The first player to call the error may
place his marker on the proper uncovered square. </li> */}
      {/* <li>
        A cumulative score is kept for each player. A player is eliminated when
        he fails in three successive turns to produce a number that can be
        covered. When all players have experienced three successive failures to
        produce a coverable number, the game ends. The player with the highest
        cumulative score wins.
      </li> */}
    </ol>
    <Button as={Link} to="/game" variant="primary">
      Start a Game
    </Button>
  </>
);

export default RulesPage;

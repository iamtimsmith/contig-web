import { Settings } from "~/components/Settings";
import type { Route } from "../+types/root";
import { Button } from "~/components/Button";
import { Link } from "react-router";

export const meta = ({}: Route.MetaArgs) => [
  { title: "Settings | Contig" },
  { name: "description", content: "Welcome to React Router!" },
];

export const SettingsPage = () => (
  <>
    <h1>Settings</h1>
    <Settings />
    <Button as={Link} to="/game" variant="primary">
      Start a Game
    </Button>
    <Button as={Link} to="/" variant="secondary">
      Main Menu
    </Button>
  </>
);
export default SettingsPage;

import { useGameContext } from "~/contexts/Game";
import { Button } from "~/components/Button";

export const MainMenu = () => {
  const { turn, handleNextTurn } = useGameContext();

  // If the game has started, do not show the main menu
  if (turn > 0) return null;

  return (
    <>
      <Button variant="primary" onClick={handleNextTurn}>
        Start Game
      </Button>
      <Button variant="secondary" onClick={() => alert("Settings")}>
        Settings
      </Button>
    </>
  );
};

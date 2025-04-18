import { createRoot } from "react-dom/client";
import { GameProvider } from "./contexts/Game";
import { Board } from "./components/Board";
import { Scoreboard } from "./components/Scoreboard";
import "./styles/style.css";
import { MainMenu } from "./components/MainMenu";
import { Container } from "./components/Container";
import { DiceProvider } from "./contexts/Dice";
import { DiceRoller } from "./components/DiceRoller";

createRoot(document.getElementById("root")!).render(
  <GameProvider>
    <DiceProvider>
      <Container>
        <h1 style={{ textAlign: "center" }}>Contig</h1>
        <MainMenu />
        <DiceRoller />
        <Scoreboard />
        <Board />
      </Container>
    </DiceProvider>
  </GameProvider>
);

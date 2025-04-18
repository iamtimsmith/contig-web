import { createRoot } from "react-dom/client";
import { GameProvider } from "./contexts/Game";
import { Board } from "./components/Board";
import { Scoreboard } from "./components/Scoreboard";
import "./styles/style.css";
import { MainMenu } from "./components/MainMenu";
import { Container } from "./components/Container";

createRoot(document.getElementById("root")!).render(
  <GameProvider>
    <Container>
      <h1>Contig</h1>
      <MainMenu />
      <Scoreboard />
      <Board />
    </Container>
  </GameProvider>
);

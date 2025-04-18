import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

export interface DiceContextType {
  rolls: number[] | null;
  handleResetDice: () => void;
  handleRollDice: () => void;
}

export const DiceContext = createContext<DiceContextType>(null!);

export const DiceProvider: FC<PropsWithChildren> = ({ children }) => {
  const [rolls, setRolls] = useState<number[] | null>(null);

  const handleResetDice = () => {
    setRolls(null);
  };

  const handleRollDice = () => {
    // Logic to roll the dice
    const rolledValues = Array.from(
      { length: 3 },
      () => Math.floor(Math.random() * 6) + 1
    );
    console.log(`Rolled values: ${rolledValues}`);
    setRolls(rolledValues);
  };

  return (
    <DiceContext.Provider value={{ rolls, handleResetDice, handleRollDice }}>
      {children}
    </DiceContext.Provider>
  );
};

export const useDiceContext = () => {
  return useContext(DiceContext);
};

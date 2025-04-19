import { boardNumbers } from "src/constants";

export const getAdjacentNumbers = (num: number) => {
  const index = boardNumbers.indexOf(num);
  // Determine if the number is at the start or end of a row
  const isEndOfRow = num % 8 === 0;
  const isStartOfRow = num % 8 === 1;
  // Get the values of the adjacent numbers
  const adjacent = [
    // Show numbers to the left if not at the start
    ...(!isStartOfRow
      ? [
          boardNumbers[index - 9],
          boardNumbers[index - 1],
          boardNumbers[index + 7],
        ]
      : []),
    // Show numbers to the right if not at the end
    ...(!isEndOfRow
      ? [
          boardNumbers[index - 7],
          boardNumbers[index + 1],
          boardNumbers[index + 9],
        ]
      : []),
    // Top and Bottom
    boardNumbers[index - 8],
    boardNumbers[index + 8],
  ].sort((a, b) => a - b);

  return adjacent;
};

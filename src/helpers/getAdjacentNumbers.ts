import { BOARD_NUMBERS } from "src/constants";

export const getAdjacentNumbers = (num: number) => {
  const index = BOARD_NUMBERS.indexOf(num);
  // Determine if the number is at the start or end of a row
  const isEndOfRow = num % 8 === 0;
  const isStartOfRow = num % 8 === 1;
  // Get the values of the adjacent numbers
  const adjacent = [
    // Show numbers to the left if not at the start
    ...(!isStartOfRow
      ? [
          BOARD_NUMBERS[index - 9],
          BOARD_NUMBERS[index - 1],
          BOARD_NUMBERS[index + 7],
        ]
      : []),
    // Show numbers to the right if not at the end
    ...(!isEndOfRow
      ? [
          BOARD_NUMBERS[index - 7],
          BOARD_NUMBERS[index + 1],
          BOARD_NUMBERS[index + 9],
        ]
      : []),
    // Top and Bottom
    BOARD_NUMBERS[index - 8],
    BOARD_NUMBERS[index + 8],
  ].sort((a, b) => a - b);

  return adjacent;
};

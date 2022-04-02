import { IBoxTable } from "../types/table";

export const Table = {
  randomPosition: (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  tracePath: (distribution: IBoxTable[]): IBoxTable[] => {
    const size = distribution.length;
    let randomList = distribution.slice();
    const pathList = [];

    for (let i = 0; i < size; i++) {
      const randomNumber = Table.randomPosition(randomList.length, 0);
      pathList.push(randomList[randomNumber]);
      randomList = randomList.filter((_, index) => randomNumber !== index);
    }

    return pathList;
  },
  conditionInDistribution: (
    x: number,
    y: number,
    cols: number,
    rows: number
  ) => {
    const conditions = [
      y === 0,
      y === rows - 1,
      x === 0 && y > 0 && y < rows - 1,
      x === cols - 1 && y > 0,
    ];

    if (conditions.includes(true)) {
      return {
        gridColumnStart: x + 1,
        gridColumnEnd: x + 1,
        gridRowStart: y + 1,
        gridRowEnd: y + 1,
      };
    }
    return null;
  },
  distribute: (cols: number, rows: number) => {
    let distribution = [];

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const position = Table.conditionInDistribution(x, y, cols, rows);

        if (!position) continue;

        distribution.push(position);
      }
    }

    return distribution;
  },
};

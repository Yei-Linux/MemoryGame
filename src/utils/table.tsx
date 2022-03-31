export function Table(cols, rows) {
  this.cols = cols;
  this.rows = rows;
  this.conditionInDistribution = function (
    x: number,
    y: number,
    cols: number,
    rows: number
  ) {
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
  };
  this.distribute = function () {
    let distribution = [];

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const position = this.conditionInDistribution(x, y, cols, rows);

        if (!position) continue;

        distribution.push(position);
      }
    }

    return distribution;
  };
  this.tracePath = function (distribution) {};
}

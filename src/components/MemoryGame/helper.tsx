import { IBoxTable } from "../../types/table";

export const Helper = {
  validateItemBoxes: (
    boxPositionsFirst: IBoxTable,
    boxPositionsSecond: IBoxTable | null
  ) => {
    if (!boxPositionsSecond) return false;
    const { gridColumnStart, gridColumnEnd, gridRowStart, gridRowEnd } =
      boxPositionsFirst;

    const {
      gridColumnStart: gridColumnStartCurrentBoxLight,
      gridColumnEnd: gridColumnEndCurrentBoxLight,
      gridRowStart: gridRowStartCurrentBoxLight,
      gridRowEnd: gridRowEndCurrentBoxLight,
    } = boxPositionsSecond;

    const conditions = [
      gridColumnStartCurrentBoxLight === gridColumnStart,
      gridColumnEndCurrentBoxLight === gridColumnEnd,
      gridRowStartCurrentBoxLight === gridRowStart,
      gridRowEndCurrentBoxLight === gridRowEnd,
    ];

    const isEqualsToActiveBoxLight = conditions.every((condition) => condition);

    return isEqualsToActiveBoxLight;
  },
};

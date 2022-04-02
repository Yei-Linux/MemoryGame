import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { levels } from "../../constants/game";
import { Utilities } from "../../helpers/utitlities";
import { IBoxTable } from "../../types/table";
import { Table } from "../../utils/table";
import Box from "../shared/Box";
import Button from "../shared/Button";
import Grid from "../shared/Grid";
import styles from "./style.css";

const { distribute, tracePath } = Table;
const { timeout } = Utilities;
const activeColor = "#FFD36E";

const MemoryGame = () => {
  const [level] = useState(0);

  const [pathLevel, setPathLevel] = useState([]);
  const [currentBoxNumber, setCurrentBoxNumber] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBoxLight, setCurrentBoxLight] = useState<IBoxTable | null>(
    null
  );
  const [distributionBox, setDistributionBox] = useState([]);
  const { cols, rows, sizeToMemorizeBox } = levels[level];
  const cx = classNames.bind(styles);

  const getDistribution = () => {
    const distribution = distribute(cols, rows);

    setDistributionBox(distribution);
  };

  const validateItemBoxes = (
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
  };

  const handleStartGame = async () => {
    setIsPlaying(true);
    const pathResult = tracePath(distributionBox);
    const path = pathResult.slice(0, sizeToMemorizeBox);
    setPathLevel(path);

    for (const itemBox of path) {
      setCurrentBoxLight(itemBox);
      await timeout(1000);
    }

    setCurrentBoxLight(null);
  };

  const loadingButton = () => (isPlaying ? "Playing" : "Go!");

  const validateMemoizedPath = ({
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd,
  }: IBoxTable) => {
    if (!isPlaying) return;

    const currentPosition = currentBoxNumber + 1;
    const itemFromPath = pathLevel[currentPosition];

    if (!itemFromPath) {
      setIsPlaying(false);
      setCurrentBoxNumber(-1);
      return;
    }

    const areEqualsBox = validateItemBoxes(
      {
        gridColumnStart,
        gridColumnEnd,
        gridRowStart,
        gridRowEnd,
      },
      itemFromPath
    );

    if (!areEqualsBox) {
      setIsPlaying(false);
      setCurrentBoxNumber(-1);
      return;
    }

    setCurrentBoxNumber(currentPosition);
  };

  useEffect(() => {
    getDistribution();
  }, []);

  return (
    <div>
      <Grid cols={cols} rows={rows}>
        {distributionBox.map(
          (
            { gridColumnStart, gridColumnEnd, gridRowStart, gridRowEnd },
            index
          ) => (
            <Box
              onClick={validateMemoizedPath.bind(this, {
                gridColumnStart,
                gridColumnEnd,
                gridRowStart,
                gridRowEnd,
              })}
              key={index}
              minWidth="50px"
              minHeight="50px"
              css={{
                color: "white",
                background: validateItemBoxes(
                  {
                    gridColumnStart,
                    gridColumnEnd,
                    gridRowStart,
                    gridRowEnd,
                  },
                  currentBoxLight
                )
                  ? activeColor
                  : "blue",
                gridColumnStart,
                gridColumnEnd,
                gridRowStart,
                gridRowEnd,
              }}
            >
              {index}
            </Box>
          )
        )}
      </Grid>
      <div className={cx("memorygame__actions")}>
        <Button disable={isPlaying} onClick={handleStartGame}>
          {loadingButton()}
        </Button>
      </div>
    </div>
  );
};

export default MemoryGame;

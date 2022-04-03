import classNames from "classnames";
import React from "react";
import { levels } from "../../constants/game";
import Button from "../ui/atoms/Button";
import Grid from "../ui/layouts/Grid";
import Container from "../ui/layouts/Container";
import ProgressInformation from "../ProgressInformation";

import indexStyles from "../../styles/index.css";
import { useDistribution } from "../../hooks/useDistribution";
import { useGame } from "../../hooks/useGame";
import ItemBox from "./ItemBox";

const MemoryGame = () => {
  const finalLevel = levels.length;
  const {
    validateOnGameToStart,
    validateMemoizedPath,
    level,
    isPlaying,
    statusGame,
  } = useGame({
    finalLevel,
  });

  const { cols, rows, sizeToMemorizeBox } = levels[level];
  const cxIndex = classNames.bind(indexStyles);

  const { distributionBox, pathLevel, currentBoxLight, getTracePathGame } =
    useDistribution({ cols, rows, sizeToMemorizeBox });

  const handleStartGame = async () => {
    validateOnGameToStart();
    getTracePathGame();
  };

  const loadingButton = () =>
    isPlaying
      ? "Playing"
      : statusGame === "lost"
      ? "Restart Game"
      : statusGame === "wonAllLevels"
      ? "Play Again!"
      : "Go!";

  return (
    <Container>
      <ProgressInformation
        isPlaying={isPlaying}
        statusGame={statusGame}
        level={level}
      />
      <Grid cols={cols} rows={rows}>
        {distributionBox.map(
          (
            { gridColumnStart, gridColumnEnd, gridRowStart, gridRowEnd },
            index
          ) => (
            <ItemBox
              key={`${gridColumnStart}/${gridColumnEnd}/${gridRowStart}/${gridRowEnd}`}
              validateMemoizedPath={validateMemoizedPath}
              pathLevel={pathLevel}
              currentBoxLight={currentBoxLight}
              index={index}
              boxItem={{
                gridColumnStart,
                gridColumnEnd,
                gridRowStart,
                gridRowEnd,
              }}
            />
          )
        )}
      </Grid>
      <Container className={cxIndex("flex", "justify-center", "items-center")}>
        <Button disable={isPlaying} onClick={handleStartGame}>
          {loadingButton()}
        </Button>
      </Container>
    </Container>
  );
};

export default MemoryGame;

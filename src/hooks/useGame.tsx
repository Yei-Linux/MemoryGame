import { useState } from "react";
import { Helper } from "../components/MemoryGame/helper";
import { IBoxTable } from "../types/table";

export type TStatusGame = "won" | "lost" | "playing" | "wonAllLevels";

export type TValidateMemoizedPath = (
  box: IBoxTable,
  pathLevel: IBoxTable[]
) => unknown;

interface IUseGame {
  finalLevel: number;
}

const { validateItemBoxes } = Helper;

export const useGame = ({ finalLevel }: IUseGame) => {
  const [level, setLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [statusGame, setStatusGame] = useState<TStatusGame>("playing");
  const [currentBoxNumber, setCurrentBoxNumber] = useState<number>(-1);

  const validateMemoizedPath = (
    { gridColumnStart, gridColumnEnd, gridRowStart, gridRowEnd }: IBoxTable,
    pathLevel: IBoxTable[]
  ): TValidateMemoizedPath => {
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
      setStatusGame("lost");
      setIsPlaying(false);
      setCurrentBoxNumber(-1);
      return;
    }

    const isOnLastStepFromPath = pathLevel.length - 1 === currentPosition;

    if (!isOnLastStepFromPath) {
      setCurrentBoxNumber(currentPosition);
      return;
    }

    const playerCompleteGame = level === finalLevel - 1;

    if (playerCompleteGame) {
      setStatusGame("wonAllLevels");
      setIsPlaying(false);
      setCurrentBoxNumber(-1);
      return;
    }

    setStatusGame("won");
    setIsPlaying(false);
    setLevel(level + 1);

    setCurrentBoxNumber(-1);
  };

  const validateOnGameToStart = () => {
    const conditionsOnStatusGame = [
      statusGame === "wonAllLevels",
      statusGame === "lost",
    ];

    const isRestartGame = conditionsOnStatusGame.some((condition) => condition);

    if (isRestartGame) {
      setLevel(0);
      setStatusGame("playing");
      return;
    }

    setStatusGame("playing");
    setIsPlaying(true);
  };

  return {
    validateOnGameToStart,
    validateMemoizedPath,
    level,
    isPlaying,
    statusGame,
  };
};

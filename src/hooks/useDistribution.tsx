import { useEffect, useState } from "react";
import { Utilities } from "../helpers/utitlities";
import { IBoxTable } from "../types/table";
import { Table } from "../utils/table";

const { distribute, tracePath } = Table;
const { timeout } = Utilities;

interface IUseDistribution {
  cols: number;
  rows: number;
  sizeToMemorizeBox: number;
}

export const useDistribution = ({
  cols,
  rows,
  sizeToMemorizeBox,
}: IUseDistribution) => {
  const [distributionBox, setDistributionBox] = useState([]);
  const [pathLevel, setPathLevel] = useState([]);
  const [currentBoxLight, setCurrentBoxLight] = useState<IBoxTable | null>(
    null
  );

  const getDistribution = () => {
    const distribution = distribute(cols, rows);

    setDistributionBox(distribution);
  };

  const getTracePathGame = async () => {
    const pathResult = tracePath(distributionBox);
    const path = pathResult.slice(0, sizeToMemorizeBox);
    setPathLevel(path);

    for (const itemBox of path) {
      setCurrentBoxLight(itemBox);
      await timeout(1000);
    }

    setCurrentBoxLight(null);
  };

  useEffect(() => {
    getDistribution();
  }, []);

  return {
    distributionBox,
    pathLevel,
    currentBoxLight,
    getTracePathGame,
    getDistribution,
  };
};

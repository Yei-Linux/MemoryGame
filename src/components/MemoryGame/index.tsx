import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { levels } from "../../constants/game";
import { Table } from "../../utils/table";
import Box from "../shared/Box";
import Button from "../shared/Button";
import Grid from "../shared/Grid";
import styles from "./style.css";

const MemoryGame = () => {
  const [distributionBox, setDistributionBox] = useState([]);
  const { cols, rows } = levels.one;
  const cx = classNames.bind(styles);

  const getDistribution = () => {
    const table = new Table(cols, rows);
    const distribution = table.distribute();

    setDistributionBox(distribution);
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
              key={index}
              minWidth="50px"
              minHeight="50px"
              css={{
                background: "blue",
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
        <Button>Go!</Button>
      </div>
    </div>
  );
};

export default MemoryGame;

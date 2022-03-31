import React from "react";
import Box from "../shared/Box";
import Button from "../shared/Button";
import Grid from "../shared/Grid";

const MemoryGame = () => {
  return (
    <div>
      <Grid>
        <Box
          minWidth="50px"
          minHeight="50px"
          css={{
            background: "blue",
            gridRowStart: 7,
            gridRowEnd: 8,
            gridColumnStart: 4,
            gridColumnEnd: 5,
          }}
        >
          1
        </Box>
        <Box minWidth="50px" minHeight="50px" css={{ background: "blue" }}>
          2
        </Box>
        <Box minWidth="50px" minHeight="50px" css={{ background: "blue" }}>
          3
        </Box>
        <Box minWidth="50px" minHeight="50px" css={{ background: "blue" }}>
          4
        </Box>
      </Grid>
      <Button>Go!</Button>
    </div>
  );
};

export default MemoryGame;

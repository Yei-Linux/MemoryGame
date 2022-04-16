import React from "react";
import MemoryGame from "../components/MemoryGame";
import WelcomeStart from "../components/WelcomeStart";
import WithLayout from "../hocs/WithLayout";

const Home = (): JSX.Element => {
  return (
    <div>
      <WelcomeStart />
      <MemoryGame />
    </div>
  );
};

export default WithLayout()(Home);

import React from "react";
import MemoryGame from "../components/MemoryGame";
import WelcomeStart from "../components/WelcomeStart";

const Home = (): JSX.Element => {
  return (
    <div>
      <WelcomeStart />
      <MemoryGame />
    </div>
  );
};

export default Home;

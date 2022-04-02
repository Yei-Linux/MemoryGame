import React from "react";
import Container from "../ui/layouts/Container";
import Text from "../ui/atoms/Text";
import indexStyles from "../../styles/index.css";
import classNames from "classnames";
import { TStatusGame } from "../../hooks/useGame";

export interface IProgressInformation {
  isPlaying: boolean;
  statusGame: TStatusGame;
  level: number;
}

const ProgressInformation = ({
  isPlaying,
  statusGame,
  level,
}: IProgressInformation) => {
  const cxIndex = classNames.bind(indexStyles);

  const getStatus = () => {
    if (isPlaying) return "You are in the right way! 😄";

    if (statusGame === 'playing') return "Start to play! 🙃";

    if (statusGame === 'won') return "You just passed to next level! 🙃";

    if (statusGame ==='wonAllLevels') return "You just won all levels! 🙃";

    return "You lost 😌";
  };

  return (
    <Container
      className={classNames(cxIndex("flex", "justify-between", "items-center"))}
    >
      <Container>
        <Container className={classNames(cxIndex("flex", "items-center"))}>
          <Text css={{ minWidth: "50px" }}>Status: </Text> &nbsp;{" "}
          <Text as="strong" weight={5}>{getStatus()}</Text>
        </Container>
        <Container className={classNames(cxIndex("flex", "items-center"))}>
          <Text css={{ minWidth: "50px" }}>Level: </Text>&nbsp;{" "}
          <Text as="strong" weight={5}>{level + 1}</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default ProgressInformation;

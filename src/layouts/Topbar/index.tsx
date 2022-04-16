import React from "react";
import Container from "../../components/ui/layouts/Container";
import Image from "../../components/ui/atoms/Image";
import Text from "../../components/ui/atoms/Text";
import classNames from "classnames";
import styles from "./style.css";
import Icon from "../../components/ui/atoms/Icon";

const imgBasePath = "https://i.imgur.com/LKLKOEK.png";

export interface ITopbar {}

const cx = classNames.bind(styles);

const Topbar = () => {
  return (
    <Container
      className={classNames("flex", "justify-between", "h-100", cx("topbar"))}
    >
      <Container
        padding={0}
        className={classNames(
          "flex",
          "items-center",
          "gap-1",
          cx("topbar__brand")
        )}
      >
        <Image
          width="30px"
          height="30px"
          src={imgBasePath}
          alt="logoMemoryze"
        />
        <Text
          as="p"
          weight={7}
          className={classNames(cx("topbar__brandtitle"))}
        >
          MEMORYZE
        </Text>
      </Container>
      <Container
        padding={0}
        className={classNames("flex", "justify-around", "gap-2")}
      >
      <Container
        padding={0}
        className={classNames(
          "flex",
          "justify-center",
          "items-center",
          "flex-col",
        )}
      >
        <Icon id="hamburger" />
      </Container>
        <Container
          padding={0}
          className={classNames(
            "flex",
            "justify-center",
            "items-center",
            "flex-col",
            cx("topbar__item")
          )}
        >
          <Text as="p" weight={7} className={cx("topbar__text")}>
            Profile
          </Text>
        </Container>
        <Container
          padding={0}
          className={classNames(
            "flex",
            "justify-center",
            "items-center",
            "flex-col",
            cx("topbar__item")
          )}
        >
          <Text as="p" weight={7}>
            Sign Out
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Topbar;

import React from "react";
import Container from "../../components/ui/layouts/Container";
import Image from "../../components/ui/atoms/Image";
import Text from "../../components/ui/atoms/Text";
import classNames from "classnames";

const imgBasePath =
  "https://camo.githubusercontent.com/932885e5602a4e8f8dc6d07e5d0ac057424ef75eef8d18faa4d5d235832a34d9/68747470733a2f2f692e696d6775722e636f6d2f38456b577948542e706e67f";

export interface ITopbar {}

const Topbar = () => {
  return (
    <Container className={classNames("flex", "justify-between")}>
      <Container>
        <Image src={imgBasePath} alt="logoMemoryze" />
      </Container>
      <Container className={classNames("flex", "justify-around", "gap-1")}>
        <Container>
          <Text as="p">Profile</Text>
        </Container>
        <Container>
          <Text as="p">Sign Out</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Topbar;

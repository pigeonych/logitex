import { Flex } from "antd";
import { Card } from "./Card";
import EldIcon from "../assets/eld.png";
import DispatchIcon from "../assets/dispatch.png";
import AuditIcon from "../assets/audit.png";
import TwentyFourSevenIcon from "../assets/24_7.png";
import DotIcon from "../assets/dot.png";
import React from "react";

const Cards = () => {
  return (
    <Flex
      vertical
      align={"center"}
      className={
        "w-full px-5 tablet:px-16 gap-y-10 tablet:gap-y-0 items-center"
      }
    >
      <Flex
        align={"start"}
        className={
          "flex-col desktop:flex-row gap-x-24 gap-y-10 desktop:gap-y-10"
        }
      >
        <Card
          title={"ELD (Electronic Logging Device)"}
          description={
            "Specialists from our ELD department support drivers and dispatchers in real-time 24/7 by keeping them informed about delivery status, recording driving activity and other information such as engine hours, ignition status, location and miles driven."
          }
          image={EldIcon}
        />
        <Card
          title={"Dispatch"}
          description={
            "Our dispatch department permanently supports drivers, assist in optimizing their work, find suitable and profitable lots, always keep in touch and ready to solve any issues."
          }
          image={DispatchIcon}
        />
        <Card
          title={"Audit"}
          description={
            "Audit is an essential part of logistics. Time to time all the companies need to check their history, activities and completed drives in order to assure the accuracy of work and financial statements. Since the Logitex was found, we successfully conducted audit for more than 100 trucks."
          }
          image={AuditIcon}
        />
      </Flex>
      <Flex
        align={"start"}
        className={
          "flex-col mt-10 desktop:flex-row gap-x-24 gap-y-10 desktop:gap-y-10"
        }
      >
        <Card
          title={"24/7"}
          description={
            "All the departments of our company are available 24/7 and are always ready to support the drivers in solving any issues. Also, we continuously monitor the drives to assure accuracy and compliance of all the rules of logistics."
          }
          image={TwentyFourSevenIcon}
        />
        <Card
          title={"DOT"}
          description={
            "We assist drivers in passing the DOT inspection every year. All of our drivers have no issues in testing their vehicles"
          }
          image={DotIcon}
        />
      </Flex>
    </Flex>
  );
};

export default Cards;

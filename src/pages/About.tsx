import React from "react";
import { Flex } from "antd";

import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <Flex
      vertical
      align={"center"}
      className={"w-full mt-48 bg-white relative rounded-lg"}
      gap={100}
    >
      <h1
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className={
          "text-2xl tablet:text-3xl desktop:text-5xl w-[60%] font-bold text-secondary bg-white px-5 desktop:px-28 py-14 rounded-lg shadow-lg text-center"
        }
      >
        About company
      </h1>
      <AboutUs />
    </Flex>
  );
};

export default About;

import { Flex } from "antd";
import React from "react";

export const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Flex vertical gap={15} className={"w-full desktop:max-w-80"}>
      <Flex gap={10} align={"center"}>
        <img
          src={image}
          alt={title}
          style={{ width: "70px", height: "70px", borderRadius: 20 }}
        />
        <h2 className="text-md tablet:text-lg font-semibold text-primary">
          {title}
        </h2>
      </Flex>
      <p className="text-base text-black">{description}</p>
    </Flex>
  );
};

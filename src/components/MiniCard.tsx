import { Flex } from "antd";

export const MiniCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <Flex
      align={"center"}
      className={"shadow-lg rounded-lg w-full tablet:w-auto"}
    >
      <img
        src={image}
        alt={title}
        style={{ height: "100px", width: "100px" }}
        className={"rounded-lg"}
      />
      <Flex vertical className={"px-10 w-full"}>
        <h1 className={"text-2xl text-primary"}>{title}</h1>
        <p>{description}</p>
      </Flex>
    </Flex>
  );
};

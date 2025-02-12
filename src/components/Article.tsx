import { Flex } from "antd";
import { Link } from "react-router-dom";
import { CalendarFilled, FolderFilled, UserOutlined } from "@ant-design/icons";

export const Article = ({
  image,
  title,
  description,
  id,
  extended,
  imageClassName,
}: {
  image: string;
  title: string;
  description: string;
  id: number;
  extended?: boolean;
  imageClassName?: string;
}) => {
  return (
    <Flex vertical gap={20} className={"max-w-lg px-3 phone:px-5"}>
      <div className={imageClassName}>
        <img src={image} alt={title} className={"rounded-xl max-h-[250px]"} />
      </div>
      <Flex className={"gap-x-5 gap-y-2"} wrap>
        <Flex align={"center"} gap={10}>
          <CalendarFilled className={"text-primary"} />
          01.03.2022
        </Flex>
        <Flex align={"center"} gap={5}>
          <UserOutlined className={"text-primary"} />
          Ulug'bek Abdullaev
        </Flex>
        <Flex align={"center"} gap={5}>
          <FolderFilled className={"text-primary"} />
          #air #cargo
        </Flex>
      </Flex>
      {extended ? (
        <h1 className={"text-3xl text-start font-semibold text-secondary"}>
          {title}
        </h1>
      ) : (
        <Link
          to={`/blog/${id}`}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={
            "text-3xl text-start font-semibold text-secondary hover:opacity-70"
          }
        >
          {title}
        </Link>
      )}
      <p className={"text-start"}>{description}</p>
    </Flex>
  );
};

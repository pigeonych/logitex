import React, { useMemo } from "react";
import { Flex } from "antd";
import { Article } from "../components/Article";
import PickUp from "../assets/pick-up.png";
import Trailer from "../assets/p2.png";
import { useLocation } from "react-router-dom";

const db = [
  {
    id: 1,
    title: "DISPATCH services are now available at Logitex!",
    description:
      "Our company has been providing services in ELD and SAFETY for more than 2 years.",
    image: PickUp,
  },
  {
    id: 2,
    title: "New TRAILER services are now available at Logitex!",
    description:
      "We have been delivering services for more than 1000+ ELD, and 100+ Dispatch units.",
    image: Trailer,
  },
];

const Blog = () => {
  const location = useLocation();
  const extended = location.pathname.includes("/blog/");

  const data = useMemo(() => {
    const id = extended ? location.pathname.split("/")[2] : null;
    return id != null ? db.find((item) => item.id === Number(id)) : db[0];
  }, [extended]);

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
        Blog
      </h1>
      <Flex
        vertical
        gap={100}
        align={"center"}
        className={"py-24 w-full tablet:w-[50%]"}
        justify={"center"}
      >
        {data && (
          <Article
            image={data.image}
            title={data.title}
            extended={extended}
            id={data.id}
            description={data.description}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default Blog;

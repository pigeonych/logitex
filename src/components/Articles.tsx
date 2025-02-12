import { Flex } from "antd";
import { Article } from "./Article";
import PickUp from "../assets/pick-up.png";
import Trailers from "../assets/p2.png";
const Articles = () => {
  return (
    <Flex vertical gap={30} className={"w-full"}>
      <h1
        className={
          "text-center text-primary text-3xl desktop:text-5xl font-bold"
        }
      >
        Our latest articles
      </h1>
      <Flex
        gap={30}
        className={
          "flex-wrap flex-col w-full items-center tablet:items-start tablet:flex-row tablet:justify-center"
        }
        align={"start"}
      >
        <Article
          image={PickUp}
          id={1}
          title={"DISPATCH services are now available at Logitex!"}
          description={
            "Our company has been providing services in ELD and SAFETY for more than 2 years."
          }
        />
        <Article
          image={Trailers}
          id={2}
          title={"New TRAILER services are now available at Logitex!"}
          description={
            "We have been delivering services for more than 1000+ ELD, and 100+ Dispatch units."
          }
        />
      </Flex>
    </Flex>
  );
};

export default Articles;

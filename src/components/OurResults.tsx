import { Button, Flex } from "antd";
import React from "react";
import { MiniCard } from "./MiniCard";
import HackerGirl from "../assets/p1.png";
import Boxes from "../assets/p2.png";
import EldIcon from "../assets/map-marker.png";
import SafetyIcon from "../assets/tick.png";
import DispatchIcon from "../assets/dispatch.png";
import { Link } from "react-router-dom";

export const OurResults = () => {
  return (
    <Flex vertical align={"center"} className={"w-full"}>
      <Flex
        className={
          "w-full flex-col desktop:flex-row gap-y-10 desktop:gap-y-0 desktop:gap-x-24"
        }
        align={"center"}
      >
        <div
          className={
            "order-2 w-full desktop:order-1 desktop:w-1/2 px-5 desktop:px-0"
          }
        >
          <img
            src={HackerGirl}
            alt={"hacker-girl"}
            className={
              "rounded-lg w-full desktop:rounded-none desktop:rounded-tr-xl"
            }
          />
        </div>
        <Flex
          vertical
          gap={30}
          className={
            "order-1 text-center max-w-5xl pt-5 px-5 desktop:order-2 desktop:text-start desktop:max-w-xl desktop:self-start"
          }
        >
          <p className="text-2xl font-semibold text-black">
            Excellent company quality services
          </p>
          <p className="text-sm font-semibold text-black">
            Today, Logitex successfully cooperates with 70+ companies
            and serves more than 1000 trucks in ELD (Electronic Logging Device),
            more than 300 Safety trucks, and also, having opened a new direction
            — Dispatch this year 2022, the company already provides these
            services to over 100 trucks in the USA.
          </p>
          <Button
            type="primary"
            className="max-w-fit self-center desktop:self-start"
          >
            <Link
              to={"/services"}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Services
            </Link>
          </Button>
        </Flex>
      </Flex>
      <Flex
        className={
          "w-full flex-col desktop:flex-row gap-y-10 pb-10 desktop:gap-y-0"
        }
        align={"center"}
      >
        <Flex
          vertical
          gap={30}
          className={
            "w-full px-5 desktop:w-1/2 text-center desktop:text-start py-5"
          }
        >
          <Flex vertical gap={50} className={"w-full items-center pt-5"}>
            <h1 className="text-primary text-3xl jumbo:text-5xl font-bold">
              Our results by 2022:
            </h1>
            <Flex
              gap={30}
              className={"w-full justify-between flex-wrap laptop:max-w-xl"}
            >
              <MiniCard title={"1000+"} description={"ELD"} image={EldIcon} />
              <MiniCard
                title={"300+"}
                description={"Safety"}
                image={SafetyIcon}
              />
              <MiniCard
                title={"100+"}
                description={"Dispatch"}
                image={DispatchIcon}
              />
            </Flex>
          </Flex>
        </Flex>
        <div className={"w-full desktop:w-1/2 px-5 desktop:px-0"}>
          <img
            src={Boxes}
            alt={"boxes"}
            className={
              "w-full rounded-lg desktop:rounded-none desktop:rounded-bl-xl"
            }
          />
        </div>
      </Flex>
    </Flex>
  );
};

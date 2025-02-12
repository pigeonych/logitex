import React from "react";
import { Button, Flex } from "antd";
import Cards from "../components/Cards";
import { OurResults } from "../components/OurResults";
import { HomeForm } from "../components/HomeForm";
import Articles from "../components/Articles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Flex vertical gap={30} className={"w-2/3 text-start pb-10"}>
      <h1 className="drop-text-fast text-3xl jumbo:text-6xl font-bold text-white tracking-normal">
        Logitex - reliability, quality and e
        <span className="tracking-wide">ff</span>iciency!
      </h1>
      <p className="drop-text-slow text-xl jumbo:text-2xl font-semibold text-white">
        More than 150+ companies already choose our services, and you?
      </p>
      <p className="drop-text-slowest subzero:hidden phone:block text-sm jumbo:text-lg max-w-lg text-white">
        Logitex is a company founded in 2020 in USA with an office in
        Tashkent. <br /> <br /> We provide quality services in: <br /> — ELD{" "}
        <br />
        — DISPATCH <br />— SAFETY <br />
        <br />
        To logistic companies in order to improve the efficiency of their work,
        as well as creating the opportunity to receive high-quality service at
        an affordable price.
      </p>
      <Button type="primary" className="max-w-fit">
        <Link to={"/services"}>Our Services</Link>
      </Button>
    </Flex>
  );
}

export const HomeContent = () => {
  return (
    <Flex vertical align={"center"} className={"w-full py-12"} gap={50}>
      <Cards />
      <OurResults />
      <HomeForm />
      <Articles />
    </Flex>
  );
};

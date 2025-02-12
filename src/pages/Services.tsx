import React from "react";
import { Flex } from "antd";
import Effective from "../assets/1.png";
import Dispatch from "../assets/2.png";
import Safety from "../assets/3.png";

const Services = () => {
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
        Services
      </h1>
      <Flex
        gap={80}
        align={"start"}
        className={"w-[80%] flex-col desktop:flex-row py-24"}
        justify={"center"}
      >
        <Flex vertical className={"w-full text-start"} gap={40}>
          <img
            src={Effective}
            alt={"effective"}
            className={"rounded-lg w-full max-h-[500px]"}
          />
          <h1 className={"text-3xl font-semibold text-secondary"}>
            Effective ELD for your company
          </h1>
          <p>
            If you are an independent truck driver or a company owner you will
            definitely need a high quality services in Electronic Logging
            Device. Logitex is here to help you! We have been
            successfully providing services on ELD for several years and the
            number of vehicles served by our company has overcame the 300 number
            so far. Our ELDs ensure the safety and compliance of your commercial
            vehicles, giving you peace of mind on the road. Our user-friendly
            system simplifies tasks such as logging hours, managing fuel
            expenses, and generating reports. With our services, you can operate
            your business more efficiently and focus on your core operations.
            All you need to start working with us is to contact us, negotiate
            the terms of cooperation and start a trial week.{" "}
          </p>
        </Flex>
        <Flex vertical className={"w-full text-start"} gap={40}>
          <img
            src={Dispatch}
            alt={"dispatch"}
            className={"rounded-lg w-full max-h-[500px]"}
          />
          <h1 className={"text-3xl font-semibold text-secondary"}>
            Dispatch Services
          </h1>
          <p>
            Dispatch services — is a new field of Logitex. Dispatchers
            are responsible for operating and properly controlling the working
            process in logistics always keeping in touch with drivers and
            customers 24/7. Our team will help you to find the suitable freight,
            manage the delivery processes and dates, allocate and plan work
            within the companies and address all the concerns that may result on
            employees' productivity and satisfaction. All these processes
            directly effect the outputs and profits of the companies. If you are
            looking for proficient services in dispatch, you may contact us to
            start productive cooperation.{" "}
          </p>
        </Flex>
        <Flex vertical className={"w-full text-start"} gap={40}>
          <img
            src={Safety}
            alt={"safety"}
            className={"rounded-lg w-full max-h-[500px]"}
          />
          <h1 className={"text-3xl font-semibold text-secondary"}>
            Safety and Fleet Management
          </h1>
          <p>
            Our company has been providing top-notch Safety and Fleet Management
            services to logistics companies across the USA for over three years.
            Our team of experienced professionals is dedicated to ensuring that
            your fleet operates at maximum efficiency and meets all safety
            regulations. Our comprehensive approach includes regular vehicle
            inspections, driver training programs, GPS tracking, and much more.
            Whether you're running a single truck or an entire fleet, our
            tailored solutions are designed to help you reduce downtime, cut
            costs, and improve overall performance. With Safety and Fleet
            Management from our company, you can trust that you're in good
            hands.
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Services;

import { Flex } from "antd";
import Trucks from "../assets/p3.png";
import { OurResults } from "./OurResults";
import { HomeForm } from "./HomeForm";
const AboutUs = () => {
  return (
    <Flex vertical gap={50} align={"center"} className={"w-full py-24"}>
      <Flex
        align={"center"}
        gap={50}
        className={"max-w-6xl flex-col jumbo:flex-row pt-12 px-12"}
      >
        <Flex vertical gap={30} className={"text-start"}>
          <h1 className={"text-primary text-4xl font-semibold"}>
            Logitex
          </h1>
          <p className={"text-black"}>
            Logitex — a company providing logistics services such as
            ELD, Safety, Audit. The company was found due to the needs of many
            companies and truck drivers for quality and timely ELD service.
            Thus, in two years of work, the company has grown to 300 trucks.
            After the numerous requests from partners, we have also added Safety
            and Aiudit to the range of our services and will soon launch
            Dispatch services. Today, we operate 24/7 to provide quality and
            consistent shipping across the United States. Today, our company
            provides services to about 70 companies in the United States. These
            include both large companies and individual entrepreneurs. All
            information of our partners regarding freight and financial reports
            remains confidential.
          </p>
        </Flex>
        <img
          src={Trucks}
          alt={"trucks"}
          className={"w-full rounded-lg desktop:max-h-[600px]"}
        />
      </Flex>
      <OurResults />
      <Flex vertical align={"center"}>
        <h1 className={"text-center text-primary text-5xl font-bold"}>
          Steps to cooperation
        </h1>
        <div className="container mx-auto">
          <Flex className="gap-24 text-center flex-col desktop:flex-row">
            <Flex vertical align={"center"} justify={"center"}>
              <div className="text-[150px] text-blue-200 font-bold opacity-70">
                01
              </div>
              <p className="text-2xl text-blue-900 font-semibold -mt-10 max-w-xs">
                Contact us or submit an application
              </p>
            </Flex>
            <Flex
              vertical
              align={"center"}
              justify={"center"}
              className={"desktop:mt-32"}
            >
              <div className="text-[150px] text-teal-300 font-bold opacity-70">
                02
              </div>
              <p className="text-2xl text-blue-900 font-semibold -mt-10 max-w-xs">
                Choose a needed service and appropriate tariff
              </p>
            </Flex>
            <Flex vertical align={"center"} justify={"center"}>
              <div className="text-[150px] text-blue-200 font-bold opacity-70">
                03
              </div>
              <p className="text-2xl text-blue-900 font-semibold -mt-10 max-w-xs">
                Start a trial week
              </p>
            </Flex>
          </Flex>
        </div>
      </Flex>
      <HomeForm />
    </Flex>
  );
};

export default AboutUs;

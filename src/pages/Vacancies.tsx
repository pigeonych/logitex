import { Flex } from "antd";
import React from "react";
import { Form } from "../components/Form";

const Vacancies = () => {
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
        Vacancies
      </h1>
      <Flex
        gap={50}
        align={"center"}
        className={"w-full flex-col desktop:flex-row py-24"}
        justify={"center"}
      >
        <Flex className={"w-full tablet:w-1/2 big:w-1/3"} justify={"center"}>
          <Form />
        </Flex>
        <Flex vertical className={"px-5"} gap={30}>
          <Flex
            gap={20}
            align={"center"}
            className={"shadow-xl p-5 rounded-lg flex-col desktop:flex-row"}
          >
            <svg
              width="72"
              height="75"
              viewBox="0 0 24 25"
              fill="none"
              className={"bg-primary rounded-lg"}
            >
              <path
                d="M20.25 14.5368V18.7868C20.25 19.8813 19.4631 20.8228 18.3782 20.9668C16.2915 21.2438 14.1624 21.3868 12 21.3868C9.83757 21.3868 7.70854 21.2438 5.62185 20.9668C4.5369 20.8228 3.75 19.8813 3.75 18.7868V14.5367M20.25 14.5368C20.7219 14.1345 21 13.5257 21 12.8757V9.09253C21 8.01159 20.2321 7.07766 19.1631 6.9177C18.0377 6.74931 16.8995 6.61999 15.75 6.53116M20.25 14.5368C20.0564 14.7018 19.8302 14.8321 19.5771 14.9162C17.1953 15.7081 14.6477 16.1368 12 16.1368C9.35229 16.1368 6.80469 15.7081 4.42289 14.9162C4.16984 14.8321 3.94361 14.7018 3.75 14.5367M3.75 14.5367C3.27808 14.1345 3 13.5257 3 12.8757V9.09253C3 8.01159 3.7679 7.07766 4.83694 6.9177C5.96233 6.74931 7.10049 6.61999 8.25 6.53116M15.75 6.53116V5.63684C15.75 4.3942 14.7426 3.38684 13.5 3.38684H10.5C9.25736 3.38684 8.25 4.3942 8.25 5.63684V6.53116M15.75 6.53116C14.5126 6.43554 13.262 6.38684 12 6.38684C10.738 6.38684 9.48744 6.43554 8.25 6.53116"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 13.1368H12.0075V13.1443H12V13.1368Z"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <Flex vertical gap={5}>
              <h1 className={"text-lg text-secondary font-semibold"}>
                We are waiting for you!
              </h1>
              <p>We are looking for employees to ELD and Safety team!</p>
            </Flex>
          </Flex>
          <Flex
            gap={20}
            align={"center"}
            className={"shadow-xl p-5 rounded-lg flex-col desktop:flex-row"}
          >
            <svg
              width="72"
              height="75"
              viewBox="0 0 24 25"
              fill="none"
              className={"bg-primary rounded-lg"}
            >
              <path
                d="M20.25 14.5368V18.7868C20.25 19.8813 19.4631 20.8228 18.3782 20.9668C16.2915 21.2438 14.1624 21.3868 12 21.3868C9.83757 21.3868 7.70854 21.2438 5.62185 20.9668C4.5369 20.8228 3.75 19.8813 3.75 18.7868V14.5367M20.25 14.5368C20.7219 14.1345 21 13.5257 21 12.8757V9.09253C21 8.01159 20.2321 7.07766 19.1631 6.9177C18.0377 6.74931 16.8995 6.61999 15.75 6.53116M20.25 14.5368C20.0564 14.7018 19.8302 14.8321 19.5771 14.9162C17.1953 15.7081 14.6477 16.1368 12 16.1368C9.35229 16.1368 6.80469 15.7081 4.42289 14.9162C4.16984 14.8321 3.94361 14.7018 3.75 14.5367M3.75 14.5367C3.27808 14.1345 3 13.5257 3 12.8757V9.09253C3 8.01159 3.7679 7.07766 4.83694 6.9177C5.96233 6.74931 7.10049 6.61999 8.25 6.53116M15.75 6.53116V5.63684C15.75 4.3942 14.7426 3.38684 13.5 3.38684H10.5C9.25736 3.38684 8.25 4.3942 8.25 5.63684V6.53116M15.75 6.53116C14.5126 6.43554 13.262 6.38684 12 6.38684C10.738 6.38684 9.48744 6.43554 8.25 6.53116"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 13.1368H12.0075V13.1443H12V13.1368Z"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <Flex vertical gap={5}>
              <h1 className={"text-lg text-secondary font-semibold"}>
                Work in Logitex team
              </h1>
              <p>Logitex is looking for proficient dispatchers.</p>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Vacancies;

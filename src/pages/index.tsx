import React, { useEffect, useMemo, useState } from "react";
import { Menu, Button, Flex } from "antd";
import { Link, Outlet, useLocation, useOutlet } from "react-router-dom";
import { CloseOutlined, MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import CustomOutlet from "../components/CustomOutlet";
import { scrollToTop } from "../utils/window";
import Burger from "./Burger";

const Layout: React.FC = () => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  const isMain = useMemo(() => location.pathname === "/", [location.pathname]);
  const background = useMemo(
    () =>
      isMain
        ? {
            background: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }
        : {
            background:
              "linear-gradient(135deg, rgba(14, 48, 86, 0.8) 0%, rgba(1, 114, 128, 0.8) 100%)",
          },
    [isMain],
  );
  return (
    <>
      <main className="layout" style={background}>
        <header className="flex w-full justify-center bg-transparent pt-10">
          <Flex vertical className={"w-2/3"} gap={40}>
            <Flex className={"w-full"} justify={"space-between"}>
              <Flex align={"center"} gap={4}>
                <img src="/logo_logitex.png" alt="Logo" className="max-h-16" />
              </Flex>
              <Button type="primary" className={"subzero:hidden burger:flex"}>
                <Link
                  to={"/"}
                  onClick={() => {
                    const timeout = setTimeout(() => {
                      const form = document.getElementById("contact-form");
                      if (form) {
                        form.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                          inline: "center",
                        });
                      }
                    }, 200);
                    return () => clearTimeout(timeout);
                  }}
                >
                  Contact Us
                </Link>
              </Button>
              <Burger />
            </Flex>
            <Flex
              className={"subzero:hidden burger:flex w-full"}
              // style={{ borderBottom: "1px solid #fff" }}
              justify={"space-between"}
              align={"center"}
            >
              <Menu
                mode="horizontal"
                defaultSelectedKeys={["/"]}
                selectedKeys={[location.pathname]}
                className={"w-full bg-transparent border-none"}
              >
                <Menu.Item key="/">
                  <Link to="/">
                    <div className={"text-white pb-5"}>Home</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/about">
                  <Link to="/about">
                    <div className={"text-white pb-5"}>About Us</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/services">
                  <Link to="/services">
                    <div className={"text-white pb-5"}>Services</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/vacancies">
                  <Link to="/vacancies">
                    <div className={"text-white pb-5"}>Vacancies</div>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/blog">
                  <Link to="/blog">
                    <div className={"text-white pb-5"}>Blog</div>
                  </Link>
                </Menu.Item>
              </Menu>
              <Flex
                align={"center"}
                className={"min-w-44 breakpoint:min-w-96 gap-x-5"}
                justify={"flex-end"}
              >
                <div
                  className={
                    "flex text-white text-sm opacity-50 justify-end subzero:hidden breakpoint:block"
                  }
                >
                  Telegram/Calls & 24/7
                </div>
                <Flex vertical className="text-white font-medium" gap={5}>
                  <a
                    type={"phone"}
                    href={"tel:+19299988682"}
                    className={"flex align-middle gap-x-1"}
                  >
                    <PhoneOutlined />
                    +1 (929) 998-86-82
                  </a>
                  {/*<a*/}
                  {/*  type={"phone"}*/}
                  {/*  href={"tel:+12057292332"}*/}
                  {/*  className={"flex align-middle gap-x-1"}*/}
                  {/*>*/}
                  {/*  <PhoneOutlined />*/}
                  {/*  +1 (205) 729-23-32*/}
                  {/*</a>*/}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </header>
        <Flex vertical align={"center"} className="w-full text-white pt-7">
          <Outlet />
        </Flex>
      </main>
      <CustomOutlet />
      <footer style={{ justifySelf: "flex-end" }} className={"px-5"}>
        <Flex className={"gap-x-12 laptop:gap-x-24"}>
          <Flex vertical className={"text-white"} gap={20}>
            <Flex gap={20}>
              <img src="/logo_logitex.png" alt="Logo" className={"max-h-16"} />
            </Flex>
            <p className={"opacity-90 text-lg max-w-sm text-white"}>
              Reliable, quality and efficient service for your company.
            </p>
            <p className={"opacity-50 text-white"}>
              All rights reserved &copy; {new Date().getFullYear()} Logitex
            </p>
          </Flex>
          <Flex
            className={"flex-col desktop:flex-row gap-y-10 desktop:gap-x-24"}
          >
            <Flex vertical gap={10}>
              <Link to={"/"} onClick={scrollToTop}>
                <span className={"before-dot text-white hover:opacity-70"}>
                  Home
                </span>
              </Link>
              <Link to={"/about"} onClick={scrollToTop}>
                <span className={"before-dot text-white hover:opacity-70"}>
                  About Us
                </span>
              </Link>
              <Link to={"/services"} onClick={scrollToTop}>
                <span className={"before-dot text-white hover:opacity-70"}>
                  Services
                </span>
              </Link>
              <Link to={"/vacancies"} onClick={scrollToTop}>
                <span className={"before-dot text-white hover:opacity-70"}>
                  Vacancies
                </span>
              </Link>
              <Link to={"/blog"} onClick={scrollToTop}>
                <span className={"before-dot text-white hover:opacity-70"}>
                  Blog
                </span>
              </Link>
            </Flex>
            <Flex gap={20}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="hover-enlarge"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M28.9127 3.96245C28.6352 3.72736 28.2993 3.57183 27.9405 3.51241C27.5818 3.45298 27.2136 3.49187 26.8752 3.62495L3.80017 12.6874C3.39544 12.8416 3.05261 13.1246 2.82449 13.4928C2.59636 13.8609 2.49558 14.2939 2.53767 14.7249C2.57522 15.1558 2.75144 15.5629 3.03991 15.8852C3.32838 16.2075 3.71355 16.4276 4.13767 16.5124L10.0002 17.6749V24.9999C9.99996 25.3962 10.1175 25.7836 10.3378 26.113C10.5581 26.4424 10.8713 26.6989 11.2377 26.8499C11.4801 26.9475 11.7388 26.9984 12.0002 26.9999C12.2628 27.0009 12.5231 26.9494 12.7656 26.8485C13.0082 26.7476 13.2281 26.5994 13.4127 26.4124L16.6627 23.1749L21.5752 27.4999C21.9378 27.8198 22.4041 27.9974 22.8877 27.9999C23.1003 28.0043 23.312 27.9705 23.5127 27.8999C23.8425 27.7956 24.1394 27.6069 24.374 27.3526C24.6086 27.0983 24.7727 26.7871 24.8502 26.4499L29.5502 5.92495C29.6323 5.57078 29.6164 5.20092 29.5041 4.85514C29.3917 4.50935 29.1873 4.20073 28.9127 3.96245ZM22.9002 25.9999L12.6002 16.9374L27.4377 6.22495L22.9002 25.9999Z"
                    fill="#0E3056"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="hover-enlarge"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
                    fill="#0E3056"
                  ></path>
                  <path
                    d="M21.5 3.5H10.5C8.64348 3.5 6.86301 4.2375 5.55025 5.55025C4.2375 6.86301 3.5 8.64348 3.5 10.5V21.5C3.5 23.3565 4.2375 25.137 5.55025 26.4497C6.86301 27.7625 8.64348 28.5 10.5 28.5H21.5C23.3565 28.5 25.137 27.7625 26.4497 26.4497C27.7625 25.137 28.5 23.3565 28.5 21.5V10.5C28.5 8.64348 27.7625 6.86301 26.4497 5.55025C25.137 4.2375 23.3565 3.5 21.5 3.5ZM16 22C14.8133 22 13.6533 21.6481 12.6666 20.9888C11.6799 20.3295 10.9108 19.3925 10.4567 18.2961C10.0026 17.1997 9.88378 15.9933 10.1153 14.8295C10.3468 13.6656 10.9182 12.5965 11.7574 11.7574C12.5965 10.9182 13.6656 10.3468 14.8295 10.1153C15.9933 9.88378 17.1997 10.0026 18.2961 10.4567C19.3925 10.9108 20.3295 11.6799 20.9888 12.6666C21.6481 13.6533 22 14.8133 22 16C22 17.5913 21.3679 19.1174 20.2426 20.2426C19.1174 21.3679 17.5913 22 16 22ZM22.5 11C22.2033 11 21.9133 10.912 21.6666 10.7472C21.42 10.5824 21.2277 10.3481 21.1142 10.074C21.0007 9.79994 20.9709 9.49834 21.0288 9.20736C21.0867 8.91639 21.2296 8.64912 21.4393 8.43934C21.6491 8.22956 21.9164 8.0867 22.2074 8.02882C22.4983 7.97094 22.7999 8.00065 23.074 8.11418C23.3481 8.22771 23.5824 8.41997 23.7472 8.66665C23.912 8.91332 24 9.20333 24 9.5C24 9.89782 23.842 10.2794 23.5607 10.5607C23.2794 10.842 22.8978 11 22.5 11Z"
                    fill="#0E3056"
                  ></path>
                </svg>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </footer>
    </>
  );
};

export default Layout;

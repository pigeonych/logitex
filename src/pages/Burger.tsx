import React, { useEffect, useMemo, useState } from "react";
import { MenuOutlined, CloseOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Flex } from "antd";

const Burger = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [burgerColor, setBurgerColor] = useState("text-white");
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > window.innerHeight) {
        setBurgerColor("text-primary");
      } else {
        setBurgerColor("text-white");
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  const onNavigation = () => {
    handleDrawerToggle();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={"burger:hidden"}>
      <nav
        className={`${burgerColor} p-4 flex justify-between items-center fixed top-0 right-0 z-50`}
      >
        <button
          onClick={handleDrawerToggle}
          className={`${burgerColor} opacity-85 hover:text-white focus:outline-none`}
        >
          <MenuOutlined style={{ fontSize: "24px" }} />
        </button>
      </nav>
      <Flex
        className={`fixed top-0 left-0 w-full h-full bg-white transition-transform transform ${
          drawerOpen ? "z-50 translate-x-0" : "-translate-x-full"
        } burger:translate-x-0 burger:hidden`}
        vertical
      >
        <div className="flex justify-between items-center p-4 burger:hidden">
          <div className="text-lg font-bold">Logitex</div>
          <button
            onClick={handleDrawerToggle}
            className="text-gray-400 hover:text-black focus:outline-none"
          >
            <CloseOutlined style={{ fontSize: "24px" }} />
          </button>
        </div>
        <ul
          className="flex flex-col items-center mt-16 space-y-4 burger:mt-0 burger:flex-row burger:space-y-0 burger:space-x-6"
          onClick={(event) => {
            event.preventDefault();
            handleDrawerToggle();
          }}
        >
          <li>
            <Link
              to="/"
              className="text-lg font-medium hover:text-blue-500"
              onClick={onNavigation}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-medium hover:text-blue-500"
              onClick={onNavigation}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-lg font-medium hover:text-blue-500"
              onClick={onNavigation}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/vacancies"
              className="text-lg font-medium hover:text-blue-500"
              onClick={onNavigation}
            >
              Vacancies
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-lg font-medium hover:text-blue-500"
              onClick={onNavigation}
            >
              Blog
            </Link>
          </li>
          <li id={"contact"}>
            <Link
              to="/"
              className="text-lg font-medium hover:text-blue-500"
              onClick={() => {
                const timeout = setTimeout(() => {
                  const form = document.getElementById("contact-form");
                  if (form) {
                    handleDrawerToggle();
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
          </li>
        </ul>
        <Flex
          align={"center"}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          justify={"center"}
          className={"w-full flex-col gap-y-5 tablet:flex-row tablet:gap-x-14"}
        >
          <div className={"flex text-black text-sm opacity-50"}>
            Telegram/Calls & 24/7
          </div>
          <Flex className="text-black flex-col tablet:flex-row font-medium gap-x-14">
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
    </div>
  );
};

export default Burger;

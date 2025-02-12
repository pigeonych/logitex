import React from "react";
import { HomeContent } from "../pages/Home";
import { useLocation } from "react-router-dom";

const CustomOutlet = () => {
  const location = useLocation();

  return (
    <section className={"w-full flex flex-col items-center"}>
      <SwitchWrapper pathname={location.pathname} />
    </section>
  );
};

const SwitchWrapper = ({ pathname }: { pathname: string }) => {
  switch (pathname) {
    case "/": {
      return <HomeContent />;
    }
    default: {
      return null;
    }
  }
};

export default CustomOutlet;

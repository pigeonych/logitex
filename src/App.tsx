import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Layout from "./pages/index";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Vacancies from "./pages/Vacancies";
import Blog from "./pages/Blog";
import Welcome from "./components/Welcome";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1f6bbd",
        },
        components: {
          Menu: {
            fontSize: 22,
            colorPrimary: "#facd40",
            activeBarHeight: 3,
          },
          Button: {
            borderRadius: 12,
            fontSize: 18,
            fontWeight: 600,
            paddingInline: 35,
            paddingBlock: 20,
          },
        },
      }}
    >
      <Router>
        {/*<Welcome />*/}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="vacancies" element={<Vacancies />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;

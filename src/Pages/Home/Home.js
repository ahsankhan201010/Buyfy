import React from "react";
import { Link } from "react-router-dom";
import Header from "./../../Components/Header/Header";
import Paragrapgh from "./../../Components/Paragrapgh/Paragraph";
import Button from './../../Components/Button/Button';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/test">
        <button>Test</button>
      </Link>
      <Header
        fontColor="red"
        fontWeight="light"
        fontSize={24}
        style={{ letterSpacing: "5px" }}
      >
        this is my dynamic content
      </Header>
      <Paragrapgh>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta,
        velit rem magni enim quis officia possimus obcaecati illum suscipit
        amet, molestiae officiis est porro vero veniam! Consequuntur, nam quod?
      </Paragrapgh>
      <Button>submmit</Button>
    </div>
  );
};

export default Home;

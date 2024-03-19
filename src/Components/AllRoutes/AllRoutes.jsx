import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter as Router
import About from "../../Pages/AboutPage/About";
import HomePage from "../../Pages/HomePage/HomePage";

const AllRoutes = () => {
  const memes = [
    {
      image:
        "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fbf2f4077-f535-4195-9efb-52756a98070f%2FUntitled.png?table=block&id=89bfc120-2c14-43d7-9470-835afc89abb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2",
    },
    {
      image:
      "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F8b5aca2f-a69d-45ae-b403-a1a7db496f98%2FUntitled.png?table=block&id=ad352b03-5c03-471b-a134-d6f2c7ffcb9b&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=660&userId=&cache=v2",
    },
    {
      image:
        "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F4d6ff0c5-fb06-41e2-91ea-611a6b227c8f%2FUntitled.png?table=block&id=a49515d9-58bb-4c79-833d-f50cddb5d455&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2",
    },
    {
    image:
    "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fb2acb8fa-6443-46ee-86a2-273a39052de0%2FUntitled.png?table=block&id=bd3796d2-fdcc-4ac9-a332-df1afcae5f67&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2",
  },
  {
    image:
    "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F1b1f0650-faa3-4ad8-83a8-cb8546080154%2FUntitled.png?table=block&id=5d8b0f6e-1a90-4603-99ca-5f82cd31bdc6&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2",
  },
    {
      image:
        "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F8d4778b9-ed18-4713-92a0-2b103a6132fb%2FUntitled.png?table=block&id=d49c90c4-479b-479f-ac52-976832cde6ca&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2",
    },
    // {
      //   image:
      //     "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F3b662448-ca27-45ef-9d17-a4b5027bc5db%2FUntitled.png?table=block&id=bccefaca-50cf-4ba6-8f40-f38c3561b0b5&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1020&userId=&cache=v2",
      // },
      {
        image:
        "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Faa5d7905-001d-4421-a62b-20d06dc94e56%2FUntitled.png?table=block&id=8f87aebd-40c4-40da-bf39-1a6189c260e1&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2",
      },
      {
        image:
        "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F7c8c6796-19f1-40a3-9ed9-9392ec086769%2FUntitled.png?table=block&id=86243842-6f26-41a3-9f93-bb80a78f3fb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2",
      },
      {
        image:
          "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F855fd03b-cb37-4e2c-8214-fef34086a412%2FUntitled.png?table=block&id=ac349807-48b8-4bb7-ad5b-3602ca7fa421&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=800&userId=&cache=v2",
      },
  ];
  return (
    <Routes>
      <Route path="/" element={<HomePage memes={memes} />} />
      <Route path="/about" element={<About memes={memes} />} />
    </Routes>
  );
};

export default AllRoutes;
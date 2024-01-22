import React, { useState } from "react";

// icons
import { IoIosArrowDown } from "react-icons/io";

const App = () => {
  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },

    {
      title: "Define the term 'responsive design' in web development.",
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },

    {
      title: "What is the significance of color theory in design?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // set acitve state
  const handleActiveState = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main className=" bg-gray-950 w-full h-screen flex items-center justify-center flex-col gap-4">
      {accordingData?.map((item, index) => (
        <div
          className="w-full sm:w-[50%] border border-gray-500 rounded p-4"
          key={index}>
          <div
            className={`${
              activeIndex === index ? " text-gray-300" : " text-gray-500"
            } flex items-center justify-between cursor-pointer font-semibold`}
            onClick={() => handleActiveState(index)}>
            <h3 className="text-[1.5rem] ">{item.title}</h3>
            <IoIosArrowDown
              className={`text-[1.5rem] transition-all duration-300 ${
                activeIndex === index && "rotate-[180deg]"
              }`}
            />
          </div>
          <div
            className={` overflow-hidden grid transition-all duration-300${
              activeIndex === index
                ? " grid-rows-[1fr] py-4"
                : " grid-rows-[0fr] py-0"
            }`}>
            <p className="text-[0.9rem] overflow-hidden text-gray-300">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default App;

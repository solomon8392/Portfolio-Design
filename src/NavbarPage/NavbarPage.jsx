import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse, faInfoCircle, faProjectDiagram, faAddressBook } from "@fortawesome/free-solid-svg-icons";
// import meme from "../asset/meme.png";

const Navbar = () => {
  const navItems = [
    // {name: "Home", icon: faHouse, span: "1", link: "#" },
    // {name: "About", icon: faInfoCircle, span: "2", link: "#" },
    // {name: "Projects", icon: faProjectDiagram, span: "3", link: "#" },
    // {name: "Contact", icon: faAddressBook, span: "4", link: "#" }
  ];
  return (
    <div className=" h-[100vh] w-[40%] md:block hidden">
      <div className="top-28 relative px-16">
      <div className="grid mb-7">
        {/* <img
          src={meme}
          className="w-[70%] h-[100%] rounded-full"
        /> */}
        <h1>Solomon Godwin</h1>
        <a href="">@sololearn1</a>
      </div>
        <ul className=" border-t-[1px] border-b-[1px] mb-4 mt-4">
         {navItems.map((items, index) => (
         <div className="cursor-pointer items-center relative flex justify-between w-[100%] mb-5">
           <li key={index} className="flex items-center font-openSans font-semibold">
            <a href={items.link}>
            {/* <FontAwesomeIcon icon={items.icon} className="mr-2" /> {items.name} */}
            </a>
          </li>
            <span className="w-5 h-5 rounded-[6px] border items-center flex justify-center">{items.span}</span>
         </div>
         ))}
        </ul>
      <h1 className="text-[12px] font-openSans font-semibold">© 2024 - solomon Godwin</h1>
      </div>
    </div>
  );
};

export default Navbar;
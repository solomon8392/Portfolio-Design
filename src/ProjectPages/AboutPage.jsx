 
import React from "react";
import "../App.css";
const AboutPage = () => {
  return (
    <div className="md:top-32 top-10 relative md:px-9 px-3 overflow-y-auto h-[60%] w-[100%]">
     <div>
     <h1 className="mb-2 md:text-[40px] font-montserrat font-bold">About me</h1>
      <p className="text-[16px] font-openSans">
        Hi, I'm John Paul, a 19-year-old web developer born in India. I am
        currently pursuing my Bachelor's degree in Computer Engineering at SRM
        Institute of Science and Technology. With over 4+ years of study in web
        development and design, and 2 years in app development, I have gained
        significant experience in creating digital solutions. My current focus
        is on exploring design systems, crafting innovative interfaces, and
        turning code into exceptional user experiences. I am presently a
        Technical Intern at Cherry+ Network, where I have been helping to build
        custom websites with various frameworks and custom styling for over a
        year. Additionally, I am interning at Liftoff and SRM Alumni Affairs. I
        strive to stay constantly updated with the latest market trends,
        demonstrating a commitment to making a difference in every project I am
        involved in. With 90+ repositories on my GitHub account and 50+ projects
        ranging from Python to React to C++, I showcase my diverse skills and
        expertise on my portfolio.
      </p>
      <button className="">Download C.V</button>
     </div>
    </div>
  );
}

export default AboutPage;
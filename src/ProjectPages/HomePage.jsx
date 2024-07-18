HomePage




import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function HomePage() {
  return (
    <div className="md:top-32 top-10 w-[100%] relative md:px-9 px-3 overflow-y-auto h-[60%]">
      <h1 className="font-montserrat md:text-[40px] text-[16px] font-bold text-[#d3d2d2] mb-2">
        Solomon Godwin
      </h1>
      <p className=" font-openSans md:text-[16px] text-[13px] mb-9">
        I'm Talented Web Developer and Designer, i experiment with web
        development frameworks mostly using ReactJS,NextJS,NextUI and Design
        using TailwindCSS as well as VanillaCSS , I have 90+ Repos on My{" "}
        <span>Github.</span>I have also designed 50+ Posters using Figma that I
        have created for my Projects. Changing the world one code at a time.
      </p>
      <div className="flex items-center justify-between">
        <span className="md:text-[18px] text-[12px] text-[#d3d2d2] font-montserrat font-bold">
          Recent Projects
        </span>
        <span className=" font-montserrat md:text-[12px] text-[10px] cursor-pointer font-semibold">
          See all
        </span>
      </div>
      <div className="w-[9p%] h-[100%] md:py-7 py-2 rounded-lg border md:px-6 px-2">
        <h1 className="mb-4">Let's Connect!</h1>
        <p className="mb-4 md:text-[18px] text-[16px]">
          If you are interested in my work or want to provide feedback about <br />
          this website, I am open to exchanging ideas and discussing any aspect <br />
          that may be relevant.
        </p>
        <button className="md:w-[17%] w-[35%] md:h-[45px] h-[40px] hover:bg-[#b6b4b5] bg-[#FFFFFF] text-[#000000] rounded-xl md:text-[16px] text-[14px] font-semibold font-openSans gap-2 justify-center flex items-center">
          Let's Talk!
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
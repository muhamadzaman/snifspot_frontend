import React from "react";
import "./Instruction.css";
import Calender from "../../Assets/Svgs/calender";
import FlagIcon from "../../Assets/Svgs/FlagIcon";
import TickIcon from "../../Assets/Svgs/TickIcon";
import CloudIcon from "../../Assets/Svgs/CloudIcon";
import MemberIcon from "../../Assets/Svgs/MemberIcon";

const parkInstructions = [
  {
    icon: <Calender />,
    heading: "Private rentals by the hour",
    txt: "Our hosts are locals that are renting their yards and private land to dog owners",
  },
  {
    icon: <FlagIcon />,
    heading: "No other dogs during your visits",
    txt: "Only you and your dogs are allowed to enter a spot during the time you've booked it",
  },
  {
    icon: <TickIcon />,
    heading: "Trust and safety first",
    txt: "Spots are designed for safety and both hosts and guests are reviewed after each visit",
  },
  {
    icon: <CloudIcon />,
    heading: "Reactive dogs welcome",
    txt: "Many of the spots we list are designed with sensitive dogs in mind",
  },
  {
    icon: <MemberIcon />,
    heading: "Monthly memberships",
    txt: "Many of our dog parks have the option to access member-only benefits with a fixed monthly price",
  },
];

const parkAvaiable = [
  {
    icon: <Calender />,
    heading: "Dog water parks",
    txt: "Many hosts have added water features like pools and/or are nearby lakes or rivers.",
    link: "https://www.sniffspot.com/listings/seattle-wa",
  },
  {
    icon: <FlagIcon />,
    heading: "Fully fenced dog parks",
    txt: "Very popular choice, perfect to contain your dogs if they are escape artists or if they are not good at recall.",
    link: "https://www.sniffspot.com/listings/seattle-wa",
  },
  {
    icon: <TickIcon />,
    heading: "Dog hiking trails",
    txt: "Some of our best spots have hiking trails in wonderful natural settings.",
    link: "https://www.sniffspot.com/listings/seattle-wa",
  },
  {
    icon: <CloudIcon />,
    heading: "Dog agility parks",
    txt: "Some hosts have implemented full agility courses to train your dogs in a private environment.",
    link: "https://www.sniffspot.com/listings/seattle-wa",
  },
  {
    icon: <MemberIcon />,
    heading: "Dog fields",
    txt: "Many of the listed spots are large pastures, fields and have farm animals that can be sighted.",
    link: "https://www.sniffspot.com/listings/seattle-wa",
  },
  {
    icon: <TickIcon />,
    heading: "Dog beaches",
    txt: "Some spots are conveniently located by the sea or have sand and other beach features.",
    link: "https://www.sniffspot.com/listings/seattle-wa",
  },
  {
    icon: <CloudIcon />,
    heading: "Indoor dog parks",
    txt: "A good alternative to do activities with your dogs on a rainy day and unpleasant weather in general.",
    link: "https://www.sniffspot.com/listings/seattle-wa",
  },
  {
    icon: <MemberIcon />,
    heading: "Small dog parks",
    txt: "Dog parks that specifically work for the needs of dogs that are smaller in size.",
    link: "https://www.sniffspot.com/listings/seattle-wa",
  },
];

const ShowInstructions = ({ instruction }) => {
  return (
    <>
      {instruction.icon}
      <div>
        <h2 className="snif-p snif-m">{instruction.heading}</h2>
        <div className="snif-p">{instruction.txt}</div>
        {instruction?.link && (
          <div className="instruction_link">
            {" "}
            <a> Explore {"-->"}</a>
          </div>
        )}
      </div>
    </>
  );
};

const Instruction = () => {
  return (
    <div className="instruction_color">
      <div className="main">
        <h1>How do Seattle's private dog parks work?</h1>
        <div className="instruction_main">
          {parkInstructions.map((value, index) => (
            <div className="instruction_item">
              <ShowInstructions instruction={value} />
            </div>
          ))}
        </div>

        <h1 className="parks_available_h">
          What other types of private dog parks are available?
        </h1>
        <div className="parks_available">
          Sniffspot has different types of private dog parks to allow any dog to
          find their ideal spot!
        </div>

        <div className="instruction_main">
          {parkAvaiable.map((value, index) => (
            <div className="instruction_item">
              <ShowInstructions instruction={value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Instruction;

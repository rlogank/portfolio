import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Btn from "./Btn";

const NextSectionButton = (props) => {
  return (
    <div className="relative mx-auto flex w-full max-w-screen-lg justify-end">
      {props.nextId ? (
        <Btn
          icon={<FaChevronDown />}
        text={<span className="capitalize">{props.nextId}</span>}
          func={() => {
            const id = props.nextId;
            const yOffset = -60;
            const element = document.getElementById(id);
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
          }}
        >
          {props.nextId}<FaChevronDown className="text-xs" />
        </Btn>
      ) : (
        <Btn
        text="Back to top"
        icon={<FaChevronUp />}
          func={() => {
            window.scrollTo({ top:0, behavior: "smooth" });
          }}
        >
          <div className="ml-auto text-sm">Back to top</div>
          <FaChevronUp className="text-xs" />
        </Btn>
      )}
    </div>
  );
};

export default NextSectionButton;

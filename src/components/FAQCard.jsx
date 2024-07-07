/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import downArrow from "../assets/down-arrow.png";
import upArrow from "../assets/up-arrow.png";

const FAQCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 overflow-hidden"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4
        className={`cursor-pointer pb-5 flex items-center justify-between text-base font-medium ${
          state ? "text-primary" : "text-text-primary"
        }`}
      >
        {faqsList.q}
        {state ? (
          <img src={upArrow} alt="down-arrow" width={12} />
        ) : (
          <img src={downArrow} alt="up-arrow" width={12} />
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQCard;

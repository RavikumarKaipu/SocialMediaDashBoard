import React from "react";
import './Sound.css';

const Sound = () => {
  const handleClick = () => {
    const text = new SpeechSynthesisUtterance(textboxRef.current.value);
    speechSynthesis.speak(text);
  };

  const textboxRef = React.useRef(null);

  return (
    <div className="mike">
    <div className="container ">
      <div className="row justify-content-center mt-5">
        <div className="col-6 d-flex flex-column justidy-content-center col-xl-12 col-sm-12 col-md-12 col-12">
          <textarea placeholder="Enter Text Here"
            id="text-box"
            className="border-3 rounded-4 fs-5 mb-4 p-4 text"
            cols="30"
            rows="10"
            ref={textboxRef}
          ></textarea>
          <button className="btn btn-primary m-auto speak" id="btn" onClick={handleClick}>Speak
            <i className="fas fa-microphone-lines fs-3"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sound;

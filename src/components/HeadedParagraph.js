import React from "react";

const HeadedParagraph = (props) => {
  return (
    <div className="main-row">
      <div className="gutter"></div>
      <div className="sub-row">
        <div className="col-12">
          <h2
            style={{
              color: "var(--primary)",
              marginBottom: "0.6rem",
              fontSize: "1.8rem",
            }}
          >
            {props.title}
          </h2>
          <p>{props.children}</p>
        </div>
      </div>
      <div className="gutter"></div>
    </div>
  );
};

export default HeadedParagraph;

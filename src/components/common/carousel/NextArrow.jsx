import React from "react";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        padding: "4px",
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
}

export default NextArrow;

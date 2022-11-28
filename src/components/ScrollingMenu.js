import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const ScrollingMenu = (props) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {props.items}
    </ScrollMenu>
  );
};

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div
      className="columns is-vcentered"
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    >
      <div className="column mt-6">
        <img
          src={process.env.PUBLIC_URL +"/images/Atras.png"}
          alt="adelante"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div
      className="columns is-vcentered"
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    >
      <div className="column mt-6">
        <img
          src={process.env.PUBLIC_URL +"/images/Adelante.png"}
          alt="adelante"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default ScrollingMenu;

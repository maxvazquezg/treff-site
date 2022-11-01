import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const ScrollingMenu = (props) => {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {/* {items.map(({ id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))} */}
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
          src="./images/Atras.png"
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
          src="./images/Adelante.png"
          alt="adelante"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
}

export default ScrollingMenu;

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decreaseCounter = () => {
    setCount(count - 1);
  };
  const increaseCounter = () => {
    setCount(count + 1);
  };

  const centered = {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-50px",
    marginLeft: "-120px",
    border: "1px solid teal",
    padding: "20px 100px",
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Counter</h1>
      <section
        style={{
          position: centered.position,
          top: centered.top,
          left: centered.left,
          marginTop: centered.marginTop,
          marginLeft: centered.marginLeft,
          border: centered.border,
          padding: centered.padding,
        }}
      >
        <h1 style={{ textAlign: "center" }}>{count}</h1>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={decreaseCounter}
            style={{ backgroundColor: "crimson", color: "#fff" }}
          >
            -
          </button>
          &nbsp;
          <button
            onClick={increaseCounter}
            style={{ backgroundColor: "aqua", color: "#fff" }}
          >
            +
          </button>
        </div>
      </section>
    </>
  );
};

export default Counter;

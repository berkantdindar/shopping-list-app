import React from "react";
import "./TodoBand.scss";

export const TodoBand = ({ checked, task, quantity, setItems }) => {
  const addQuantity = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.task === task ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const removeQuantity = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.task === task ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  return (
    <div className="todo-band">
      <label
        style={{ textDecoration: checked ? "line-through" : "none" }}
        className="item-name"
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={() =>
            setItems((prevItems) =>
              prevItems.map((item) =>
                item.task === task ? { ...item, checked: !item.checked } : item
              )
            )
          }
          className="item"
        />
        {task}
      </label>
      <div className="counter">
        <button onClick={removeQuantity}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            // class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              // fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
        <span className="count"> {quantity}</span>
        <button onClick={addQuantity}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            // class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              // fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

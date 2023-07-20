import { useState } from "react";
import "./App.scss";
import { TodoBand } from "./components/TodoBand/TodoBand";

function App() {
  const [items, setItems] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      const value = event.target.value;
      const newItem = { checked: false, task: value, quantity: 1 };
      const updatedArray = [...items, newItem];
      setItems(updatedArray);
    }
  };
  console.log(items);
  return (
    <div className="app">
      <container>
        <input
          onKeyDown={handleKeyDown}
          className="add-item"
          type="text"
          placeholder="Add an item."
        ></input>
        {items.map((item, index) => (
          <>
            <TodoBand
              key={index}
              checked={item.checked}
              task={item.task}
              quantity={item.quantity}
              setItems={setItems}
              index={index}
            />
            <hr style={{ width: "100%" }}></hr>
          </>
        ))}
      </container>
    </div>
  );
}

export default App;

import "./App.module.css";
import Tile from "./components/Tile/Tile";
import TaskDescription from "./TaskDescription"
import { useState } from "react";
import React=require("react");
import {getRandomTitle} from "./utils/titles"

const App = () => {

  const [count, setCount] = useState(0);
  const [tiles, setTiles] = useState<{ id: number; title: string }[]>([]);

  const handleClick = () => {
    setCount(count + 1);
    setTiles((prev) => [
      ...prev,
      { id: count, title: getRandomTitle() }
    ]);
  };

  return (
    <div>
      <TaskDescription />
      <h2>Tiles</h2>
      <button onClick={handleClick}>Create tile</button>
      <div className="tileList">
        {tiles?.map((t) => (
          <Tile id={t.id} title={t.title} />
        ))}
      </div>
    </div>
  );
};
export default App;

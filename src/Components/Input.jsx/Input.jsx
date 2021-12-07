import { useState } from "react";
import styling from "./Input.module.css";

export default function Input({ CreatingTask }) {
  const [text, setText] = useState("");

  const [desc, setDesc] = useState("");

  const handleTitleChange = (e) => {
    setText(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleAddingTask = () => {
    CreatingTask(text, desc);
    // console.log(text, desc);
  };

  // console.log(text);
  return (
    <>
      <input
        value={text}
        placeholder="Write Title"
        onChange={handleTitleChange}
        className={styling.myInput}
      />
      <input
        placeholder="Description"
        onChange={handleDescChange}
        className={styling.myDescription}
      />
      <button className={styling.addBtn} onClick={handleAddingTask}>
        +
      </button>
    </>
  );
}

import styling from "./Button.module.css";

export default function Button({ handleFilter, title }) {
  const name = title ? "Show Compelted" : "Show Hidden";
  return (
    <button className={styling.myBtn} onClick={handleFilter}>
      {name}
    </button>
  );
}

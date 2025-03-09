import css from "./Options.module.css";
export default function Options({ value, upDate, totalValues,reset }) {
  return (
    <div className={css.optionsContainer}>
      {Object.keys(value).map((el, ind) => (
        <button className={css.btnOptions} key={ind} onClick={() => upDate(el)}>
          {el.slice(0, 1).toUpperCase() + el.slice(1)}
        </button>
      ))}
      {totalValues ? (
        <button className={css.btnOptions} onClick={reset}>
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

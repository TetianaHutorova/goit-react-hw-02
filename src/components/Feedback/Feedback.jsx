 export default function Feedback({ value,total}) {
  return (
    <div>
      {Object.keys(value).map((el, ind) => (
        <p key={ind}>
          {el.slice(0, 1).toUpperCase() + el.slice(1)}: {value[el]}
        </p>
      ))}
      <p>Total: {total}</p>
      <p>Positive: {Math.round((value.good / total) * 100)}%</p>
    </div>
  );
}

import Grogu from "./Grogu";

function Board() {
  const cell = Array(7).fill(null);
  const cellMap = cell.map((item, index) => <div className="cell">{item}</div>);
  return (
    <section className="board">
      {cellMap}
      {/* <div className="cell">{<Grogu />}</div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div> */}
    </section>
  );
}

export default Board;

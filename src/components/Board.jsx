import Grogu from "./Grogu";

function Board ({ groguPosition }) {
  const cell = Array(7).fill(null);

  return (
    <section className="board">
      { cell.map((_, index) => (<div className="cell" key={ index }>{ groguPosition && <Grogu /> }</div>)) }
    </section>
  );
}

export default Board;
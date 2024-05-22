import Cell from "./Cell";

function Board ({ groguPosition }) {
  const cell = Array(7).fill(null);

  return (
    <section className="board">
      { cell.map((_, index) => (
        <Cell key={index} isGrogu={index === groguPosition}/> 
      ))}
    </section>
  );
}

export default Board;
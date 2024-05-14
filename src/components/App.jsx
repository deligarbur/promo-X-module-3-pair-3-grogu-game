import { useState } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";
//1º creamos VE de las cosas que van a irse modificando aquí vamos a guardar la info con el set es con la que vamos a modificar nuestras variables que es una función, la primera palabra es la que voy a pasar por props cuando necesite pasarla de un componente a otro  y cada vez que se tenga que cambiar, modificar o eliminar vamos autilizar la función que omienza po rle set //
function App() {
  const [rollDice, setRollDice] = useState(null);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frog, setFrog] = useState(["🐸", "🐸", "🐸"]);
  const [groguPosition, setGroguPosition] = useState(0);
  const [gameStatus, setGameStatus] = useState("en curso");
  //2º Esto genera nº aleatorio//
  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  //3º ese nº aleatorio lo guardamos en una constante que es numberRandom//
  const numberRandom = getRandomNumber(4);
  //4º Esta función será responsable de la mecánica principal del juego//
  const handleClicknumberDice = () => {
    setRollDice(getRandomNumber(numberRandom));
    if (numberRandom === 4) {
      setGroguPosition((prevPosition) => prevPosition + 1);
      setGameStatus("grogu avanza una casilla");
      // } else if (numberRandom ===1)
    }
    console.log(numberRandom);
  };

  return (
    <>
      <Header />
      <main className="page">
        <Board />

        <section>
          {/* 5º Añado ev clic al btn de lanzar dado y creo FM*/}
          <button className="dice" onClick={handleClicknumberDice}>
            Lanzar Dado
          </button>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;

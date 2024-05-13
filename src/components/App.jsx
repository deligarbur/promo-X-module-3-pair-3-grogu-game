import { useState } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";


function App () {
  const [rollDice, setRollDice] = useState(null);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frog, setFrog] = useState(["🐸", "🐸", "🐸"]);
  const [groguPosition, setGroguPosition] = useState(0);
  const [gameStatus, setGameStatus] = useState("en curso");

  function getRandomNumber (max) {
    return Math.ceil(Math.random() * max);
  }

  const numberRandom = getRandomNumber(4);

  const numberDice = () => {
    setRollDice(getRandomNumber(numberRandom));
    console.log(numberRandom);
  };


  return (
    <>
      <Header />
      <main className="page">
        <Board />


        <section>
          <button className="dice">Lanzar Dado</button>
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

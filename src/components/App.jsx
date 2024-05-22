import { useState, useEffect} from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";
import GoodsContainer from "./GoodsContainer";
import Dice from "./Dice";
//1º creamos VE de las cosas que van a irse modificando aquí vamos a guardar la info con el set es con la que vamos a modificar nuestras variables que es una función, la primera palabra es la que voy a pasar por props cuando necesite pasarla de un componente a otro  y cada vez que se tenga que cambiar, modificar o eliminar vamos autilizar la función que omienza po rle set //
function App () {
  const [rollDice, setRollDice] = useState(null);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frog, setFrog] = useState(["🐸", "🐸", "🐸"]);
  const [groguPosition, setGroguPosition] = useState(0);
  const [gameStatus, setGameStatus] = useState("en curso");
  const [name, setName] = useState ("");

  useEffect (()=>{
    if(groguPosition >= 6){
      setGameStatus ("¡¡Grogu se ha comido el cargamento!! Has perdido")    }
      else if ( groguPosition < 6 &&
        cookies.length === 0 &&
        eggs.length === 0 &&
        frog.length === 0){
          setGameStatus ("Ganaste, Mando completa la misión")
        }

  }, [groguPosition, cookies, eggs, frog  ])
 
  
  //2º Esto genera nº aleatorio//
  function getRandomNumber (max) {
    return Math.ceil(Math.random() * max);
  }
  //3º ese nº aleatorio lo guardamos en una constante que es numberRandom//
  const numberRandom = getRandomNumber(4);
  //4º Esta función será responsable de la mecánica principal del juego//
  const handleClicknumberDice = () => {
    setRollDice(getRandomNumber(numberRandom));

    // Cuando el número aleatorio es 4, el grogu avanza una casilla
    if (numberRandom === 4) {
      setGroguPosition((prevPosition) => prevPosition + 1);
      setGameStatus("grogu avanza una casilla");
      // cuando el número aleatorio es 1 quito una galleta
    } else if (numberRandom === 1) {
      setCookies(cookies.slice(1));
      setGameStatus(`${name} se ha descargado una mercancía`);
      // cuando el número aleatorio es 2 quito un huevo
    } else if (numberRandom === 2) {
      setEggs(eggs.slice(1));
      setGameStatus(`${name} se ha descargado una mercancía`);
      // cuando el número aleatorio es 3 quito una rana
    } else if (numberRandom === 3) {
      setFrog(frog.slice(1));
      setGameStatus(`${name} se ha descargado una mercancía`);
    }
    //después de hacer los condicionales tengo que pintar las mercancias, para esto me creo un nuevo componente para hacer el map
  };
     const handleChange = (ev) => {
      setName (ev.target.value);
      

     }

     const restarGamer = (ev) => {
      setGroguPosition (0);
      setCookies (["🍪", "🍪", "🍪"]);
      setEggs (["🥚", "🥚", "🥚"]);
      setFrog (["🐸", "🐸", "🐸"]);
      setRollDice (null);
      setGameStatus ("En curso");
      setName ("");
     }
  return (
    <>
      <Header  />
      <main className="page">

      <section>
          <h2>Introduce tu nombre para jugar</h2>
          <form>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
          </form>
        </section>
        <Board groguPosition={ groguPosition } />

        <section>
          {/* 5º Añado ev clic al btn de lanzar dado y creo FM*/ }

          <Dice handleClicknumberDice={ handleClicknumberDice } />

          <div className="game-status">{ gameStatus }</div>
        </section>
        {/* Llamo a mi componente, 3 veces y le paso por props los arrays de las mercancias (galletas, huevos, ranas)*/ }
        <GoodsContainer data={ cookies } />
        <GoodsContainer data={ eggs } />
        <GoodsContainer data={ frog } />
        <section>
          <button className="restart-button" onClick = {restarGamer}>Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import "./components/Card/Card.css";
import { useState } from "react" //STATE KUTUPHANESİ
let arr = [{ id: 1, tittle: "Dağ 1", par: "Açıklama 1" }, { id: 2, tittle: "Dağ 2", par: "Açıklama 2" },
{ id: 3, tittle: "Dağ 3", par: "Açıklama 3" }, { id: 4, tittle: "Dağ 4", par: "Açıklama 4" }]
// function kare (sayi){  console.log(sayi*sayi);}
// const kare2=(sayi)=>console.log(sayi*sayi)
function App() {
  // kare(5);
  const [ders, setDers] = useState(11);//STATE FONKSİYONU


  return (
    <div>
      <h1>Ana Başlık</h1>
      <h2> Ders {ders}</h2>
      <button onClick={() => setDers(ders - 1)}>Azalt</button>
      <button onClick={() => setDers(ders + 1)}>Arttır</button>



      <div className="Cards">

        {arr.map(function ( { par, tittle },i) {
          <Card par={par} tittle={tittle} />
          return <Card key={`index ${i}`}
           par={par} 
           tittle={tittle}
            ders={ders}
             index={i}  />;
          //veya aynısını soyle de yapabılırsın:
          // {arr.map(function ({ i, par, tittle })
          // return <Card key={i} par={par} tittle={tittle} />;
          //yada direk id lerini kullan

        })
        }
      </div>
    </div>
  );
}
export default App;


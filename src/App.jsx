import { useState } from "react";
import Btn from "./Btn";
import Data from "./Data";
// import "./App.css";
import "./Style.css";
import ToDO from "./ToDo";
import Todos from "./Tods";
import Error from "./Error";

function App() {
  let [list, setlist] = useState([
    {
      name: "shake milk",
      date: "4/7/2024",
    },
    {
      name: "shake voobe",
      date: "4/7/2024",
    },
    {
      name: "shake looe",
      date: "4/7/2024",
    },
    {
      name: "shake doobe",
      date: "4/7/2024",
    },
    {
      name: "shake hoobiie",
      date: "4/7/2024",
    },
  ]);

  function addd(newItem, DueDate) {
    console.log("added new items", newItem, DueDate);
    setlist([...list, { name: newItem, date: DueDate }]);
  }
  function del(namee) {
    const newi = list.filter((itesm) => itesm.name !== namee);
    setlist(newi);
    console.log("item deleted ", namee);
  }
  return (
    <>
      <center>
        <Btn />
        <Data update={addd}></Data>
        <Error list={list}></Error>
        <Todos del={del} list={list} update={addd}></Todos>
      </center>
    </>
  );
}
export default App;

import ToDO from "./ToDo";
function Todos({ list,del }) {
  return (
    <>
    {list.map(list=><ToDO del={del} key={list.name} name={list.name} due={list.date}></ToDO>)}
    </>
  );
}
export default Todos;

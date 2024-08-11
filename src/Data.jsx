import { useState } from "react";

function Data({ update }) {
  let [lists, setlists] = useState("");
  let [Date, setDate] = useState("");
  const changeList = (e) => {
    setlists(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <>
      <div className="container text-center">
        <div className="row roww">
          <div className="col-4">
            <input
              onChange={changeList}
              type="text"
              placeholder="Enter To do here"
            />
          </div>
          <div className="col-4">
            <input onChange={changeDate} type="date" />
          </div>
          <div className="col-2">
            <button
              onClick={() => {
                if (lists != 0 && Date != 0) {
                  update(lists, Date);
                }
              }}
              type="button"
              className="btn btn-success"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Data;

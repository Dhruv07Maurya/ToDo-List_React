function ToDO({ name, due, del }) {
  return (
    <>
      <div className="container">
        <div className="row roww ">
          <div className="col-4">{name}</div>
          <div className="col-4">{due}</div>
          <div className="col-2">
            <button
              onClick={() => del(name)}
              type="button"
              className="btn btn-danger"
            >
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToDO;

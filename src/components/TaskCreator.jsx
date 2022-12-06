import { useState } from "react";

export function TaskCreator({ createTask }) {
  const [newTask, setNewTask] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    createTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSumit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="escribe una tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Enviar</button>
      </div>
    </form>
  );
}

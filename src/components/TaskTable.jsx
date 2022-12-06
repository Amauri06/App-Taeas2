import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

  const TaskTableRow = (donevalue)=>{
    return (
      tasks
      .filter(task => task.done === donevalue)
      .map((task, id) => (
      <TaskRow task={task} key={id} toggleTask={toggleTask} />
    )))
  }


  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {
          TaskTableRow(showCompleted)
        }
      </tbody>
    </table>
  );
};













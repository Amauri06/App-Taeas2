import { TaskCreator } from "./components/TaskCreator";
import { useEffect, useState } from "react";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import {Container} from'./components/Container'


function App() {
  const [taskItem, setTaskItem] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createTask(taskName) {
    if (!taskItem.find((task) => taskName === task.name)) {
      setTaskItem([...taskItem, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTaskItem(
      taskItem.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const cleanTask = () => {
    setTaskItem(taskItem.filter((task) => !task.done));
    setShowCompleted(false);
  };

  // obtenemos el valor del local stora y lo guardamos en una variable
  // si el valor que obtenemos es un undefined no se cambia el valor del estado.
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    data && setTaskItem(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItem));
  }, [taskItem]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createTask={createTask} />
        <TaskTable tasks={taskItem} toggleTask={toggleTask} />
        <VisibilityControl
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
          isChecked={showCompleted}
        />
        {showCompleted && (
          <TaskTable
            tasks={taskItem}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;

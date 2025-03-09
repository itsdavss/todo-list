import { useState } from "react";
import style from "./Form.module.css";
import { PlusCircle, Notepad, Trash } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

function Form() {

  interface Task {
    id: string;
    name: string;
    isDone: boolean;
  }

  const [newTask, setNewTask] = useState<Task | null>(null);
  const [newText, setNewText] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewText("");
    }
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setNewText(event.target.value);

    setNewTask({
      id: uuidv4(),
      name: event.target.value,
      isDone: false,
    });
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id != taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function checkTask(taskToCheck: string) {
    const updatedCheckTasks = tasks.map((task) => {
      if (task.id == taskToCheck) {
        return { ...task, isDone: !task.isDone };
      }
      return task
    });
    setTasks(updatedCheckTasks);
  }

  const doneTasks = tasks.filter((task => {
    return task.isDone == true
  }))

  return (
    <main className={style.container}>
      <form onSubmit={handleCreateNewTask} className={style.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newText}
          onChange={handleInput}
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <section className={style.tarefas}>
        <div className={style.titulos}>
          <div className={style.titulo}>
            <h3 className={style.criadas}>Tarefas Criadas</h3>
            <span>{tasks.length}</span>
          </div>
          <div className={style.titulo}>
            <h3 className={style.concluidas}>Concluídas</h3>
            <span>
              {tasks.length <= 0 ? (
                tasks.length
              ) : (
                `${doneTasks.length} de ${tasks.length}`
              )}
            </span>
          </div>
        </div>
        <div className={style.itens}>
          {tasks.length <= 0 ? (
            <div className={style.conteudo}>
              <Notepad size={56} color="var(--gray-400)" />
              <div className={style.mensagem}>
                <h4>Você ainda não tem tarefas cadastradas</h4>
                <h4>Crie tarefas e organize seus itens a fazer</h4>
              </div>
            </div>
          ) : (
            <ul className={style.lista}>
              {tasks.map((task: Task) => {
                return (
                  <li key={task.id}>
                    <input
                      type="checkbox"
                      onChange={() => {
                        checkTask(task.id);
                      }}
                    />
                    <p className={task.isDone ? style.riscado : ''}>{task.name}</p>
                    <button
                      className={style.lixeira}
                      onClick={() => {
                        deleteTask(task.id);
                      }}
                    >
                      <Trash color="var(--gray-300)" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

export default Form;

import { useState } from "react";
import style from "./Form.module.css";
import { PlusCircle, Notepad, Trash } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [newTask, setNewTask] = useState();
  const [newText, setNewText] = useState("");

  const [tasks, setTasks] = useState([]);

  function handleCreateNewTask() {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewText("");
  }

  function handleInput() {
    setNewText(event.target.value);

    setNewTask({
      id: uuidv4(),
      name: newText,
      isDone: false,
    });
  }

  function deleteTask(taskToDelete) {
    console.log(taskToDelete);
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id != taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <main className={style.container}>
      <form onSubmit={handleCreateNewTask} className={style.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newText}
          onChange={handleInput}
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
            <span>0</span>
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
              {tasks.map((task) => {
                return (
                  <li key={task.id}>
                    <input type="checkbox" />
                    <p>{task.name}</p>
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

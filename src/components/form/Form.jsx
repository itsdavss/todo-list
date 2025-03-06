import { useState } from "react";
import style from "./Form.module.css";
import { PlusCircle, Notepad, Trash } from "phosphor-react";

function Form() {
  // const [isChecked, setIsChecked] = useState();

  const tasks = [
    {
      id: 1,
      name: "Estudar React",
      isDone: true,
    },
    {
      id: 2,
      name: "Pular corda",
      isDone: false,
    },
  ];

  return (
    <main className={style.container}>
      <form action="" className={style.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <section className={style.tarefas}>
        <div className={style.titulos}>
          <div className={style.titulo}>
            <h3 className={style.criadas}>Tarefas Criadas</h3>
            <span>0</span>
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
                    <input
                      type="checkbox"
                      checked={task.isDone ? true : false}
                      // onChange={()=> {setIsChecked(!task.isDone)}}
                    />
                    <p>{task.name}</p>
                    <Trash color="var(--gray-300)" />
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

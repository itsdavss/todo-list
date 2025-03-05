import style from './Form.module.css'
import { PlusCircle } from 'phosphor-react'

function Form() {
  return (
    <main className={style.container}>
      <form action="" className={style.form}>
        <input type="text" placeholder='Adicione uma nova tarefa'/>
        <button type='submit'>
        Criar
        <PlusCircle size={16} />
        </button>
      </form>
    </main>
  )
}

export default Form
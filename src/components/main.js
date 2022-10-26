import React, { Component } from 'react';
import './main.css'

//Form
import { FaPlus } from 'react-icons/fa'

//Tarefas
import { FaTrash, FaPen } from 'react-icons/fa'

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  }


  handleSubmit = (e) => {

    e.preventDefault()
    const { tarefas, index } = this.state
    let { novaTarefa } = this.state

    novaTarefa = novaTarefa.trim()

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas]

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: ''
      })
    } else{
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index:-1
      })
    }

  }
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }
  handleDelete = (e, index) => {
    const { tarefas } = this.state
    const novasTarefas = [...tarefas]

    novasTarefas.splice(index, 1)

    this.setState({
      tarefas: [...novasTarefas]
    })
  }
  handleEdit = (e, index) => {
    const { tarefas } = this.state

    this.setState({
      index,
      novaTarefa: tarefas[index],
    })
  }

  render() {
    const { novaTarefa, tarefas } = this.state
    return (
      <div className="main">

        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action='#' className='form'>

          <input onChange={this.handleChange} type="text" value={novaTarefa}></input>

          <button type='submit'><FaPlus></FaPlus></button>

        </form>

        <ul className='tarefas'>

          {tarefas.map((tarefa, index) => (

            <li key={tarefa}>
              {tarefa}
              <span>

                <FaTrash
                  className='delete'
                  onClick={(e) => this.handleDelete(e, index)}>
                </FaTrash>

                <FaPen
                  onClick={(e) => this.handleEdit(e, index)}
                  className='edit'>
                </FaPen>

              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
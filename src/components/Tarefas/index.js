import React from "react";
import PropTypes from 'prop-types'
import { FaTrash, FaPen } from 'react-icons/fa'
import './tarefas.css'


export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return (
    <ul className='tarefas'>
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaTrash
              className='delete'
              onClick={(e) => handleDelete(e, index)}>
            </FaTrash>
            <FaPen
              onClick={(e) => handleEdit(e, index)}
              className='edit'>
            </FaPen>
          </span>
        </li>
      ))}
    </ul>
  )
}
Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
}

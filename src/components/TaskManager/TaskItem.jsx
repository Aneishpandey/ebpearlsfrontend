"use client"

import { memo } from "react"
import PropTypes from "prop-types"
import { useApp } from "../../Context/AppContext"
import Button from "../common/Button"

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask } = useApp()

  return (
    <div className="task-item">
      <div className={`task-checkbox ${task.completed ? "checked" : ""}`} onClick={() => toggleTask(task.id)}></div>
      <span className={`task-text ${task.completed ? "completed" : ""}`}>{task.text}</span>
      
      <Button onClick={() => deleteTask(task.id)} text="X Delete" variant="secondary"  />
    </div>
  )
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
}

export default memo(TaskItem)

"use client"

import { useState, useCallback, memo } from "react"
import { useApp } from "../../Context/AppContext"
import TaskItem from "./TaskItem"
import Button from "../common/Button"
import "./TaskManager.css"


const TaskManager = () => {
  const { tasks, addTask } = useApp()
  const [newTaskText, setNewTaskText] = useState("")

  const handleInputChange = useCallback((e) => {
    setNewTaskText(e.target.value)
  }, [])

  const handleAddTask = useCallback(() => {
    if (newTaskText.trim()) {
      addTask({
        id: Date.now(),
        text: newTaskText,
        completed: false,
      })
      setNewTaskText("")
    }
  }, [newTaskText, addTask])

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleAddTask()
      }
    },
    [handleAddTask],
  )

  return (
    <section className="task-manager">
      <div className="task-manager-container">
        <h2 className="task-manager-title">Task Manager</h2>
        <p className="task-manager-subtitle">Your daily to do list</p>

        <div className="task-manager-card">
          <div className="task-list">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>

          <div className="task-input-wrapper">
            <input
              type="text"
              className="task-input"
              placeholder="Add new task"
              value={newTaskText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="taskmanager-button-container">
           <Button onClick={handleAddTask} text="Add Task" variant="primary"  />
           </div>
        </div>
      </div>
    </section>
  )
}

export default memo(TaskManager)

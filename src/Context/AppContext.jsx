"use client"

import { createContext, useContext, useReducer, useMemo } from "react"
import PropTypes from "prop-types"

// Initial state
const initialState = {
  tasks: [
    { id: 1, text: "Task item one", completed: false },
    { id: 2, text: "Task Item Two", completed: false },
  ],
  theme: "light",
}

// Action types
const ActionTypes = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  SET_THEME: "SET_THEME",
}

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    case ActionTypes.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.payload ? { ...task, completed: !task.completed } : task)),
      }
    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}

// Create context
const AppContext = createContext()

// Context provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Memoized actions
  const actions = useMemo(
    () => ({
      addTask: (task) => dispatch({ type: ActionTypes.ADD_TASK, payload: task }),
      deleteTask: (id) => dispatch({ type: ActionTypes.DELETE_TASK, payload: id }),
      toggleTask: (id) => dispatch({ type: ActionTypes.TOGGLE_TASK, payload: id }),
      setTheme: (theme) => dispatch({ type: ActionTypes.SET_THEME, payload: theme }),
    }),
    [],
  )

  // Memoized value
  const value = useMemo(
    () => ({
      ...state,
      ...actions,
    }),
    [state, actions],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}

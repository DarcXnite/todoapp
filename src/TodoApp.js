import React from "react"

import AddTodo from "./AddTodo.js"
import TodoItem from "./TodoItem.js"


class TodoApp extends React.Component {
    state = {
        todos: [],
        filter: "all",
    }

    addTodo = (todo) => {
        this.setState({ 
            todos: [todo, ...this.state.todos] 
        })
    }

    handleChange = (id) => {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    updateFilter = (str) => {
        this.setState({
            filter: str
        })
        console.log(this.state.todos.completed)
    }

    render() {
        let todos = []
        if (this.state.filter === "all") {
            todos = this.state.todos
        } else if (this.state.filter === "incomplete") {
            todos = this.state.todos.filter(todo => !todo.completed)
        } else if (this.state.filter === "completed") {
            todos = this.state.todos.filter(todo => todo.completed)
        }

        const todoItem = todos.map(item => 
            <TodoItem 
                key={item.id} 
                item={item.value} 
                handleChange={this.handleChange}
                todo={item}
                onDelete={() => this.deleteTodo(item.id)}
            />)
        
        let filter = this.state.filter
        let totalTodos = this.state.todos.length
        let completedTodos = this.state.todos.filter(todo => todo.completed).length

        return (
            <div>
                <h4>Todo App</h4>
                <AddTodo onSubmit={this.addTodo} />
                <br />
                <div className="btnCtr">
                    <button className={(filter === "all") ? "btn btn-success" 
                        : "btn btn-primary"} onClick={() => this.updateFilter("all")}>
                        Show All
                    </button>
                    <button className={(filter === "completed") ? "btn btn-success" 
                        : "btn btn-primary"} onClick={() => this.updateFilter("completed")}>
                        Sort Completed
                    </button>
                    <button className={(filter === "incomplete") ? "btn btn-success" 
                        : "btn btn-primary"} onClick={() => this.updateFilter("incomplete")}>
                        Sort Incompleted
                    </button>
                </div>
                <ul>
                    {todoItem}
                </ul>
                <br />
                <p className="todo-footer">
                    Incompleted Todos: {totalTodos - completedTodos} | 
                 | Completed Todos: {completedTodos} |
                 | Total Todos: {totalTodos}
                 </p>
            </div>
        )
    }
}

export default TodoApp
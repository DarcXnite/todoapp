import React from "react"

class TodoItem extends React.Component {
    state = {
        editMode: false,
        editText: ""
    }

    componentDidMount() {
        this.setState({ editText: this.props.item })
    }

    handleEditChange = (e) => {
        const newValue = e.target.value
        this.setState({ editText : newValue })
    }

    handleStartEdit = () => {
        this.setState({ editMode: true })
    }

    handleEditDone = () => {
        this.setState({ editMode: false })
    }

    onKeyDown = (e) => {
        if(e.keyCode === 13) {
            this.setState({ editMode: false })
        }
    }

    render() {
        const style = {
            display: "none"
        }

        const editMode = this.state.editMode

        return (
            <li>
                <input 
                    type="checkbox"
                    checked={this.props.todo.completed}
                    onChange={() => this.props.handleChange(this.props.todo.id)}
                />
                <label 
                    className={this.props.todo.completed ? "completed" : ""}
                    onClick={() => this.props.handleChange(this.props.todo.id)}
                    style={(editMode) ? style: null}
                >
                    {this.state.editText}
                </label>
                <input 
                    type="text" 
                    style={(this.state.editMode) ? null: style}
                    className="edit-input"
                    value={this.state.editText}
                    onChange={this.handleEditChange}
                    onKeyDown={this.onKeyDown}
                />
                <div className="edit-delete">
                    <span 
                        className="todo-edit" 
                        onClick={(editMode) ? this.handleEditDone
                            : this.handleStartEdit}
                        >
                        {(editMode) ? "Save" : "Edit"}
                    </span>
                    <span 
                        onClick={this.props.onDelete}
                        className="todo-delete fas fa-trash-alt">
                    </span>
                </div>
            </li>
        )
    }
}

export default TodoItem
import React from "react"

class AddTodo extends React.Component {
    state = {
        value: "",
        count: 0
    }

    todoValue = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value === "") {
            alert("Please enter a task")
        } else {
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
                value: ""
            }
        })
        this.props.onSubmit({
            id: this.state.count,
            value: this.state.value,
            completed: false,
        })
    }}

    render() {
        return (
            <form className="form-inline justify-content-center" onSubmit={this.handleSubmit}>
                <input
                    placeholder="Add Todo"
                    value={this.state.value}
                    onChange={this.todoValue}
                />
                <button
                    type="button"
                    onClick={this.handleSubmit}
                    className="btn btn-danger"
                >
                Add</button>
            </form>
        )
    }
}

export default AddTodo
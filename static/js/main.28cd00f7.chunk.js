(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(7),i=n.n(l),r=n(8),s=n(1),c=n(2),d=n(4),u=n(3),p=n(5),m=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={value:"",count:0},n.todoValue=function(t){n.setState({value:t.target.value})},n.handleSubmit=function(t){t.preventDefault(),""===n.state.value?alert("Please enter a task"):(n.setState(function(t){return{count:t.count+1,value:""}}),n.props.onSubmit({id:n.state.count,value:n.state.value,completed:!1}))},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{className:"form-inline justify-content-center",onSubmit:this.handleSubmit},o.a.createElement("input",{placeholder:"Add Todo",value:this.state.value,onChange:this.todoValue}),o.a.createElement("button",{type:"button",onClick:this.handleSubmit,className:"btn btn-danger"},"Add"))}}]),e}(o.a.Component),h=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={editMode:!1,editText:""},n.handleEditChange=function(t){var e=t.target.value;n.setState({editText:e})},n.handleStartEdit=function(){n.setState({editMode:!0})},n.handleEditDone=function(){n.setState({editMode:!1})},n.onKeyDown=function(t){13===t.keyCode&&n.setState({editMode:!1})},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.setState({editText:this.props.item})}},{key:"render",value:function(){var t=this,e={display:"none"},n=this.state.editMode;return o.a.createElement("li",null,o.a.createElement("input",{type:"checkbox",checked:this.props.todo.completed,onChange:function(){return t.props.handleChange(t.props.todo.id)}}),o.a.createElement("label",{className:this.props.todo.completed?"completed":"",onClick:function(){return t.props.handleChange(t.props.todo.id)},style:n?e:null},this.state.editText),o.a.createElement("input",{type:"text",style:this.state.editMode?null:e,className:"edit-input",value:this.state.editText,onChange:this.handleEditChange,onKeyDown:this.onKeyDown}),o.a.createElement("div",{className:"edit-delete"},o.a.createElement("span",{className:"todo-edit",onClick:n?this.handleEditDone:this.handleStartEdit},n?"Save":"Edit"),o.a.createElement("span",{onClick:this.props.onDelete,className:"todo-delete fas fa-trash-alt"})))}}]),e}(o.a.Component),f=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[],filter:"all"},n.addTodo=function(t){n.setState({todos:[t].concat(Object(r.a)(n.state.todos))})},n.handleChange=function(t){n.setState(function(e){return{todos:e.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})}})},n.deleteTodo=function(t){n.setState({todos:n.state.todos.filter(function(e){return e.id!==t})})},n.updateFilter=function(t){n.setState({filter:t}),console.log(n.state.todos.completed)},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=[];"all"===this.state.filter?e=this.state.todos:"incomplete"===this.state.filter?e=this.state.todos.filter(function(t){return!t.completed}):"completed"===this.state.filter&&(e=this.state.todos.filter(function(t){return t.completed}));var n=e.map(function(e){return o.a.createElement(h,{key:e.id,item:e.value,handleChange:t.handleChange,todo:e,onDelete:function(){return t.deleteTodo(e.id)}})}),a=this.state.filter,l=this.state.todos.length,i=this.state.todos.filter(function(t){return t.completed}).length;return o.a.createElement("div",null,o.a.createElement("h4",null,"Todo App"),o.a.createElement(m,{onSubmit:this.addTodo}),o.a.createElement("br",null),o.a.createElement("div",{className:"btnCtr"},o.a.createElement("button",{className:"all"===a?"btn btn-success":"btn btn-primary",onClick:function(){return t.updateFilter("all")}},"Show All"),o.a.createElement("button",{className:"completed"===a?"btn btn-success":"btn btn-primary",onClick:function(){return t.updateFilter("completed")}},"Sort Completed"),o.a.createElement("button",{className:"incomplete"===a?"btn btn-success":"btn btn-primary",onClick:function(){return t.updateFilter("incomplete")}},"Sort Incompleted")),o.a.createElement("ul",null,n),o.a.createElement("br",null),o.a.createElement("p",{className:"todo-footer"},"Incompleted Todos: ",l-i," | | Completed Todos: ",i," | | Total Todos: ",l))}}]),e}(o.a.Component);i.a.render(o.a.createElement(f,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.28cd00f7.chunk.js.map
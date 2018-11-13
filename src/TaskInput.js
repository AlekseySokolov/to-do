import React from 'react';
import './App.css';
import  './bootstrap.min.css';
import TaskOutput from './TaskOutput';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput : '',
      taskStore : []
    }
  }

  onChange = (event) => {
    this.setState({
      textInput : event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      textInput : '',
      taskStore : (this.state.textInput === '') ? this.state.taskStore : [...this.state.taskStore, this.state.textInput]
    })
  }

  render() {
    return (
      <div className="container" style={{marginTop : '30px', marginBottom : '30px'}}>
       <div className="input-group">
        <input onChange={this.onChange} value={this.state.textInput} type="text"
         className="form-control" placeholder="Input the task" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4"/>
        <div className="input-group-append" id="button-addon4">
         <button onClick={this.onSubmit} className="btn btn-outline-secondary" type="button" style={{marginBottom : '30px'}}>add task</button>
        </div>
       </div>
        {this.state.taskStore.map((item,index) => <TaskOutput key={index} item={item} />)}
      </div>
    )
  }
};

export default TaskInput;

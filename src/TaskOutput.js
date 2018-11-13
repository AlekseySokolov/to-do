import React from 'react';
import './App.css';
import  './bootstrap.min.css';
import cn from 'classnames';

class TaskOutput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display : true
    }
  }
  onMouseEnter = () => {
    this.setState({
      display : !this.state.display
    })
  }
  onMouseLeave = () => {
    this.setState({
      display : !this.state.display
    })
  }
  render() {
    const taskClassSwitcher = cn({
      'alert' : true,
      'alert-primary' : this.state.display,
      'alert-danger' : !this.state.display
    });
    return (

   <div className={taskClassSwitcher} role="alert" keys={this.props.keys} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.props.onClick}>{this.props.item}</div>

   )

  }
}



export default TaskOutput;

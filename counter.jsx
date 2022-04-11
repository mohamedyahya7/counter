import React from "react";
class Counter extends React.Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  getBadeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "danger" : "success";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  render() {
    return (
      <React.Fragment>
        <button
          className='btn btn-primary btn-sm'
          onClick={this.state.count > 0 ? this.handleDecrease : null}>
          -
        </button>
        <span className={this.getBadeClasses()}>{this.formatCount()}</span>
        <button
          className='btn btn-primary btn-sm'
          onClick={this.handleIncrement}>
          +
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;

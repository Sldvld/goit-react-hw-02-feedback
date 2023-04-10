import React from 'react';

export class Counter extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor((100 / this.countTotalFeedback()) * this.state.good);
  };

  render() {
    return (
      <div className="Counter">
        <h2 className="Counter__header">Please leave feedback</h2>
        <button type="button" onClick={this.handleIncrement}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Bad
        </button>
        <h3>Statistics</h3>
        <span>Good: {this.state.good}</span>
        <br />
        <span>Neutral: {this.state.neutral}</span>
        <br />
        <span>Bad: {this.state.bad}</span>
        <br />
        <span>Total: {this.countTotalFeedback()}</span>
        <br />
        <span>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </span>
      </div>
    );
  }
}

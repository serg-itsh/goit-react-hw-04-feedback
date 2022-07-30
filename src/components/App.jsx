import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    console.log(event.target);
    const { name } = event.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => (acc += el), 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave the feedback" className="title">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onHandleClick={this.handleClick}
          />
        </Section>

        <Section title="">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

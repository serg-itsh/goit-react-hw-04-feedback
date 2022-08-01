// import React, { Component } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const option = event.target.name;
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title="Please leave the feedback" className="title">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onHandleClick={handleClick}
        />
      </Section>

      <Section title="">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

//////////////////////////////////

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = event => {
//     console.log(event.target);
//     const { name } = event.target;
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((acc, el) => (acc += el), 0);

//   countPositiveFeedbackPercentage = () =>
//     Math.round((this.state.good * 100) / this.countTotalFeedback());

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave the feedback" className="title">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onHandleClick={this.handleClick}
//           />
//         </Section>

//         <Section title="">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

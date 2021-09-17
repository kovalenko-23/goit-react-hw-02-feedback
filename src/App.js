import { Component } from 'react';
import { Section } from './Components/Section/Section';
import { FeedbackOptions } from './Components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Components/Statistics/Statistics';
import { Notification } from './Components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      if (this.state.hasOwnProperty(option)) {
        return {
          [option]: prevState[option] + 1,
        };
      }
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((prevValue, value) => {
      return prevValue + value;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = (this.state.good * 100) / total;
    return percentage.toFixed(0);
  };

  render() {
    const { good, bad, neutral } = this.state;
    const options = Object.keys(this.state);

    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbcakPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />

          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbcakPercentage}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

import { Component } from 'react';
import { Section } from './Components/Section/Section';
import { FeedbackOptions } from './Components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Components/Statistics/Statistics';

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

  render() {
    const { good, bad, neutral } = this.state;

    const countTotalFeedback = () => {
      const values = Object.values(this.state);
      const total = values.reduce((prevValue, value) => {
        return prevValue + value;
      }, 0);
      return total;
    };

    const countPositiveFeedbackPercentage = () => {
      const total = countTotalFeedback();
      const percentage = (good * 100) / total;
      return percentage.toFixed(0);
    };

    const totalFeedback = countTotalFeedback();

    return (
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />

          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            'No feedback given'
          )}
        </Section>
      </div>
    );
  }
}

export default App;

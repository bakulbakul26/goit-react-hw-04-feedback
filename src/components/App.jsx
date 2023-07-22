import { useState } from 'react';
import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  const [feedback, setfeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateCount = state => {
    setfeedback(prevFeedback => ({
      ...prevFeedback,
      [state]: prevFeedback[state] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? ((feedback.good / countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={updateCount} />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

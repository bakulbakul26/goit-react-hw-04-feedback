import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateArr = Object.keys(options);

  return (
    <div>
      {stateArr.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
          className={css.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

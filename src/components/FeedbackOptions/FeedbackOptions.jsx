import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  handleIncrement,
  handleDecrement,
  handleNeutral,
}) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={handleIncrement}>
          Good
        </button>
      </li>

      <li>
        <button type="button" onClick={handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={handleDecrement}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  handleDecrement: PropTypes.string.isRequired,
  handleIncrement: PropTypes.string.isRequired,
  handleNeutral: PropTypes.string.isRequired,
};

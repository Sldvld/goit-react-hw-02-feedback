import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList} title="Statistics">
      <li className={css.statisticsItem}>
        <p>Good: {good}</p>
      </li>
      <li className={css.statisticsItem}>
        <p>Neutral: {neutral}</p>
      </li>
      <li className={css.statisticsItem}>
        <p>Bad: {bad}</p>
      </li>
      <li className={css.statisticsItem}>
        <p>Total: {total}</p>
      </li>
      <li className={css.statisticsItem}>
        <p>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <div className={css.section}>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

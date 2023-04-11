import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <container>
      <h2>{title}</h2>
      {children}
    </container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

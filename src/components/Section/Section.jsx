import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
};

Section.propType = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

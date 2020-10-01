import React from "react";
import PropTypes from "prop-types";

const Spinner = ({ className, color }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    fill={color}
  >
    <path d="M29.3 29.3h141.4v141.4H29.3z" />
    <path d="M.01466 100L99.9986.01606 199.98254 100 99.9986 199.98394z" />
    <path d="M7.62708 61.73756L138.26654 7.62378l54.11378 130.63946-130.63946 54.11378z" />
    <path d="M7.62708 138.26244L61.74086 7.62298l130.63946 54.11378-54.11378 130.63946z" />
  </svg>
);

Spinner.defaultProps = {
  className: ``,
  color: `#EF233C`
};

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};

export default Spinner;

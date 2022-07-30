// import React from "react";
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onHandleClick }) => {
  return (
    <ul className={styles.list}>
      {options.map((item, i) => {
        return (
          <li className={styles.listItem} key={i}>
            <button
              className={styles.btn}
              type="button"
              name={item}
              onClick={onHandleClick}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleClick: PropTypes.func.isRequired,
};

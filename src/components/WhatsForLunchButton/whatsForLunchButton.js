import React from 'react';
import PropTypes from 'prop-types';
import styles from './whatsForLunchButton.module.css';

const WhatsForLunchButton = ({ onClick }) => (
    <div className={styles.root}>
        <button className={styles.btn} onClick={onClick}>
            What's For Lunch?
        </button>
    </div>
);

WhatsForLunchButton.propTypes = {
    onClick: PropTypes.func,
};

export default WhatsForLunchButton;
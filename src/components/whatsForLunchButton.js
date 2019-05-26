import React from 'react';
import PropTypes from 'prop-types';

const WhatsForLunchButton = ({ onClick }) => (
    <button onClick={onClick}>What's For Lunch?</button>
);

WhatsForLunchButton.propTypes = {
    onClick: PropTypes.func,
};

export default WhatsForLunchButton;
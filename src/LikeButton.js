import React from 'react';

const LikeButton = (props) =>
    <button onClick={props.handleClick}>{props.text}</button>
export default LikeButton;
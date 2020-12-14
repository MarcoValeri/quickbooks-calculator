import React from 'react';

// Import question.scss
import './question.scss';

// Import icons
import { IoMdArrowDropdown } from 'react-icons/io';

const Question = ({ request }) => {
    return (
        <div className="request">
            <hr />
            <p>{request}<span className="arrow-icon"><IoMdArrowDropdown /></span></p>
        </div>
    )
};

export default Question;
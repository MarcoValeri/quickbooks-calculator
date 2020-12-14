import React from 'react';

// Import icons from react-icons
import { IconContext } from 'react-icons/lib';
import { FaFacebookF, 
    FaLinkedinIn, 
    FaPinterest, 
    FaInstagram,
    FaYoutube 
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FiLink2 } from 'react-icons/fi';

// Import share-btn.scss
import './share-btns.scss';

const ShareBtn = () => {
    return (
        <div className="share-btns">
            <IconContext.Provider value={{ size: '1rem', className: 'react-icons' }}>
                <button className="icon-container">
                    <FaFacebookF />
                </button>
                <button className="icon-container">
                    <FaLinkedinIn />
                </button>
                <button className="icon-container">
                    <FaPinterest />
                </button>
                <button className="icon-container">
                    <FaInstagram />
                </button>
                <button className="icon-container">
                    <FaYoutube />
                </button>
                <button className="icon-container">
                    <AiOutlineMail />
                </button>
                <button className="icon-container">
                    <FiLink2 />
                </button>
            </IconContext.Provider>
        </div>
    )
};

export default ShareBtn;
import { RiArrowDropDownLine } from 'react-icons/ri';
import React from 'react';

const Sort = ({handleSort}) => {
    return (
        <div className="flex justify-center">
            <div className="dropdown dropdown-right dropdown-center">
                <div tabIndex={0} role="button" className="btn bg-lightGreen text-white m-8 text-lg rounded-box">
                    Sort By <RiArrowDropDownLine size="2em" />
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-offWhite rounded-box z-100 w-48 shadow-sm">
                    <li><a onClick={() => handleSort('rating')}>Rating</a></li>
                    <li><a onClick={() => handleSort('totalPages')}>Number of Pages</a></li>
                    <li><a onClick={() => handleSort('yearOfPublishing')}>Publisher Year</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sort;
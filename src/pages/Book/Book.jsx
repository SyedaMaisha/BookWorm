import React, { } from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // const data= use(bookPromise);
    // console.log(data);

    // console.log(singleBook)
    const { bookId, image, tags, bookName, author, category, rating } = singleBook;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card h-full shadow-sm p-3  border-2 border-blue-100">
                <figure className='bg-offWhite p-4 '>
                    <img className='h-[166px] '
                        src={image}
                    />
                </figure>
                <div className="card-body p-0">
                    <div>
                        {
                            tags.map(tag => <button className="btn btn-soft btn-success rounded-2xl mt-4 mr-1">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title font-serif"> {bookName}</h2>
                    <p className="flex items-center gap-2 text-gray-600">
                        <span>By:</span>
                        <span>{author}</span>
                    </p>
                    <hr className="border-t-2 border-dashed border-gray-300 my-1" />
                    <div className="card-actions justify-between">
                        <div className="badge p-0">{category}</div>
                        <div className="badge p-0">
                            {rating} <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
import React from 'react';
import { FiFileText } from 'react-icons/fi';
import { IoPeopleSharp } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router';
// import { removeFromDB } from '../../utility/addToDB';


const ListedBookCard = ({ book, type, handleRemove }) => {
    return (
        <div className="card border border-neutral-300 shadow bg-base-100 mb-4 min-w-[320px]">
            <div className="card-body flex-col gap-6 sm:flex-row">
                <div className='bg-offWhite p-4 rounded-box shrink-0 flex items-center justify-center'>
                    <img src={book.image} className='h-40 object-cover' />
                </div>
                <div className='flex flex-col gap-3 grow'>
                    <h2 className="card-title font-serif">{book.bookName}</h2>
                    <p className='text-gray-600'>By: {book.author} </p>
                    <div className='flex flex-wrap items-center gap-3'>
                        <strong>Tag </strong>
                        {book.tags.map(tag => {
                            return (
                                <button className="btn btn-soft bg-lightBlue text-white rounded-2xl mx-4">#{tag}</button>
                            )
                        })}
                        <div className='flex'>
                                <button><MdDateRange size={20} className='mr-4' /></button>
                                <p>Year of Publication: {book.yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IoPeopleSharp size={24} />
                        Publisher: {book.publisher}
                        <FiFileText size={24} />
                        Page: {book.totalPages}
                    </div>
                    <div className="divider m-0"></div>



                    <div className='grid sm:grid-cols-2 lg:flex  flex-wrap gap-3'>
                        <button className="btn bg-blue-200 text-cyan-700 rounded-4xl mr-4"><strong>Category:</strong> {book.category}</button>

                        <button className="btn bg-blue-200  text-cyan-700 rounded-4xl mr-4"><strong>Rating:</strong> {book.rating}</button>

                        <Link className='btn bg-lightGreen text-white rounded-4xl mr-4 ' to={`/bookDetails/${book.bookId}`}> View Details</Link>

                        <Link onClick={() => handleRemove(type, book.bookId)} className='btn bg-red-700 text-white rounded-4xl mr-4 '> Remove </Link>

                        {/* <Link> <button onClick={() => removeFromDB(book.bookId)} className='btn bg-red-600 text-white rounded-4xl mr-4 '> Remove </button></Link> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;


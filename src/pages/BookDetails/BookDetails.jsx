import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useLoaderData, useParams } from 'react-router';
import { addToReadListDB, addToWishListDB } from '../../utility/crudToDB';


const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const bookData = data.find(book => book.bookId === bookId);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookData;

    const handleAddToRead = id => {
        addToReadListDB(id);
    }
    const handleWishList = id => {
        addToWishListDB(id);
    }
    return (
        <div className="hero min-h-[85dvh]">
            <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-16 my-12">
                <img
                    src={image}
                    className="h-[70vh] rounded-lg shadow-2xl"
                />
                <div className='flex flex-col gap-4 grow'>
                    <h1 className="text-5xl font-bold font-serif">
                        {bookName}
                    </h1>
                    <p className='text-gray-600'>By: {author} </p>
                    <div className="divider m-0"></div>
                    <h1> {category} </h1>
                    <div className="divider m-0"></div>
                    <p className='text-justify '>
                        <strong>Review:</strong> {review}
                    </p>
                    <p>
                        <strong>Tag </strong> {tags.map(tag => <button className="btn btn-soft btn-success rounded-2xl mx-2">#{tag}</button>)}
                    </p>
                    <div className="divider m-0"></div>
                    <p className='grid grid-cols-3'>
                        Number of Pages: <strong className='col-span-2 bottom-text'> {totalPages} </strong>
                        Publisher: <strong className='col-span-2'g> {publisher} </strong>
                        Year of Publishing: <strong className='col-span-2'> {yearOfPublishing} </strong>
                        Rating: <strong className='col-span-2'> {rating} </strong>
                    </p>


                    <div>
                        <button onClick={() => handleAddToRead(id)} className="btn mr-4">Done Reading</button>
                        <button onClick={() => handleWishList(id)} className="btn bg-lightGreen text-white">WishList</button>
                    </div>
                </div>
            </div>
            <ToastContainer
                style={{ marginTop: '70px', zIndex: 100 }}
                autoClose={2000}
                draggable
                theme="dark"
            />
        </div>
    );
};

export default BookDetails;
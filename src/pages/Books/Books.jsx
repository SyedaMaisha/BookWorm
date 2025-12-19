import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

    // const [allBooks,setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {setAllBooks(data)})
    // }, []);


    // const bookPromise = fetch('booksData.json').then(res => res.json())

    return (
        <div className='my-20'>

                <h1 className='text-center font-bold pb-6 text-3xl'> Books</h1>
            <Suspense fallback={<span> loading ..</span>}>
                <div className='grid grid-cols-1 justify-self-center 
                sm:grid-cols-2 
                md:grid-cols-3 
                xl:grid-cols-4 gap-6'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;
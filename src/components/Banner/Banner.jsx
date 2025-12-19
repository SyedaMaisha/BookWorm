import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <>
            
            {/* <div className="carousel w-full my-4"> */}
                {/* Slide 1 */}
                {/* <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="../../assets/The-girl-on-the-train.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
                {/* <div id="slide2" className="carousel-item relative w-full rounded-">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
                {/* <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
                {/* <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            {/* </div> */}

            <div className='mt-6 p-6 flex justify-around lg:justify-between lg:px-20 items-center bg-offWhite rounded-box'>
                <div className='max-w-2/3 mr-4'>
                    <h5 className='font-bold text-4xl text-justify  max-sm:text-left'>Books To make You Alive  </h5> <br />
                    <button disabled className='btn bg-lightGreen text-white rounded-box'>Explore</button>
                </div>
                <div className='max-w-1/3'>
                    <img className='size-40 rounded-lg' src={bookImage} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;
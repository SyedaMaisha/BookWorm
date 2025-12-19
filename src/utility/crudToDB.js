import { ToastContainer, toast } from 'react-toastify';

export const getStoredBook = () => {
    const readListSTR = localStorage.getItem("readList");

    if (readListSTR) {
        const storedReadList = JSON.parse(readListSTR);
        return storedReadList;
    }
    else {
        return [];
    }
}

export const addToReadListDB = id => {
    const storedReadList = getStoredBook();

    if (storedReadList.includes(id)) {
        toast("Already added to Read List");
    }
    else {
        storedReadList.push(id);
        const readList = JSON.stringify(storedReadList);
        localStorage.setItem("readList", readList);
        toast("Added to Read List");

    }
}

export const addToWishListDB = id => {
    let storedWishList = JSON.parse(localStorage.getItem('wishList')) || [];

    if(storedWishList.includes(id)) {
        toast("Already added to Wish List")
    }
    else{
        storedWishList.push(id);
        localStorage.setItem("wishList", JSON.stringify(storedWishList));
        toast("Added to Wish List")

    }
}

// export const removeFromDB = id => {
//     const storedReadList = getStoredBook();
//     const remainingBooks = storedReadList.filter(bookId => bookId !== String(id));
//     const remainingBooksSTR = JSON.stringify(remainingBooks);
//     localStorage.setItem("readList", remainingBooksSTR);
// }

// export const addToWishListDB = id => {
//     const storedWishListData = getStoredBook();
//     if(storedWishListData.includes(id)) {
//         alert("Already added to WishList");
//     }   
//     else{
//         storedWishListData.push(id);
//         const wishListData = JSON.stringify(storedWishListData);
//         localStorage.setItem("wishList", wishListData);
//     }
// }


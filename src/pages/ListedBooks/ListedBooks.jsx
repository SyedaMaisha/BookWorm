import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { NavLink, useLoaderData } from 'react-router';
import { useEffect, useState } from 'react';
import { getStoredBook } from '../../utility/crudToDB';
import ListedBookCard from '../../components/ListedBookCard/ListedBookCard';
import Sort from '../../components/Sort/Sort';
import CenteredLayout from '../../components/CenteredLayout';



const ListedBooks = () => {
    const data = useLoaderData();
    const [wishList, setWishList] = useState([]);
    const [readList, setReadList] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
            const wishListBooks = data.filter(book => storedWishList.includes(String(book.bookId)));

            const storedReadList = getStoredBook();
            const readListBooks = data.filter(book => storedReadList.includes(String(book.bookId)));

            setWishList(wishListBooks);
            setReadList(readListBooks);
        }
    }, [data])

    const handleRemove = (type, id) => {
        const storedReadList = JSON.parse(localStorage.getItem(type))
        const updatedReadlist = storedReadList.filter(ID => ID !== String(id));
        localStorage.setItem(type, JSON.stringify(updatedReadlist));
    }

    const handleSort = (type) => {
        const sortedWishlist = [...wishList].sort((a, b) => b[type] - a[type]);
        setWishList(sortedWishlist)

        const sortedReadlist = [...readList].sort((a, b) => b[type] - a[type]);
        setReadList(sortedReadlist)
    }
    // const emptyText =" Books Have not added yet"

    const appendList = (listName = [], type) => {
        if (!listName.length) {
            return (
                <NavLink to="/" className="font-bold text-2xl ">
                    <CenteredLayout>Start building your collection</CenteredLayout>
                </NavLink >
            )
        }
        return (
            listName.map(book => (
                <ListedBookCard key={book.bookId} book={book} type={type} handleRemove={handleRemove} />
            ))
        )
    }

    return (
        <div>

            {/* Sort Dropdown */}
            <Sort handleSort={handleSort}></Sort>

            {/* Books Tabs */}
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {appendList(readList, "readList")}
                </TabPanel>

                <TabPanel>
                    {appendList(wishList, "wishList")}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
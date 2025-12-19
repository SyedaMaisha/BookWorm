import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: ErrorPage,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json").then(res => res.json()),
        Component: Home
      },
      {
        path: "bookDetails/:id",
        // useParams() = {id}
        loader: () => fetch('/booksData.json').then(res => res.json()),
        // useLoaderData() = data
        Component: BookDetails
      },
      {
        path: "listedBooks",
        loader: () => fetch('/booksData.json').then(res => res.json()),
        Component: ListedBooks
      },
      {
        path: "pagesToRead",
        loader: () => fetch('/booksData.json').then(res => res.json()),
        Component: PagesToRead
      }
    ]
  },
]);
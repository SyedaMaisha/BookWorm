import { useLoaderData } from "react-router";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';
import CenteredLayout from "../../components/CenteredLayout";
import { useMemo } from "react";

const PagesToRead = () => {
  const bookData = useLoaderData();
  const wishListId = JSON.parse(localStorage.getItem("wishList"));
  const books = bookData.filter(book => wishListId.includes(String(book.bookId)));

  const totalPages = useMemo(() => {
    return books.reduce((sum, book) => sum + book.totalPages, 0)
  }, [books])

  const pagesToReadData = books.map(data => {
    const books = {
      name: data.bookName,
      pages: data.totalPages,
      totalPages: totalPages
    }
    return books;
  })

  const totalPagesChartData = [
    {
      name: "Total Pages To Read",
      totalPages: totalPages
    }
  ];


  if (books.length !== 0) {
    return (
      <div className="m-8">

        <BarChart
          style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618, marginTop: '5vh' }}
          data={totalPagesChartData}
          layout="vertical"
          margin={{ top: 100, right: 150, left: 10, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name"/>
          <Tooltip />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            label={({ x, y, width, value }) => (
              <text
                x={x + width + 8}
                y={y + 160}
                fill="#555"
                textAnchor="start"
              >
                {value} pages
              </text>
            )}
          />
        </BarChart>


        <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618, marginTop: '5vh' }}
          responsive
          data={pagesToReadData}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pages" fill="#8884d8" activeBar={<Rectangle fill="green" stroke="blue" />} />
        </BarChart>

      </div>
    )
  }
  else {
    return (
      <CenteredLayout>
        <div className="card bg-base-100 card-xl shadow-sm text-center">
          <div className="card-body">
            <h2 className="font-bold text-2xl">Congratulations!</h2>
            <p> You have read all the books. <br />Add books to wishlist to see how many pages you have to read </p>
          </div>
        </div>
      </CenteredLayout>
    )
  }
};

export default PagesToRead;